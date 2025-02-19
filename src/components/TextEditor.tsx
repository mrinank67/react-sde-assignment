import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import {
  EditorState,
  ContentState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";

const TextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [savedContent, setSavedContent] = useState(
    localStorage.getItem("rteContent")
  );

  useEffect(() => {
    if (savedContent) {
      try {
        const contentBlock = htmlToDraft(savedContent);
        if (contentBlock) {
          const contentState = ContentState.createFromBlockArray(
            contentBlock.contentBlocks
          );
          setEditorState(EditorState.createWithContent(contentState));
        }
      } catch (error) {
        console.error("Error loading content:", error);
        setEditorState(EditorState.createEmpty());
      }
    }
  }, [savedContent]);

  const handleEditorChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    const contentState = newEditorState.getCurrentContent();
    const html = draftToHtml(contentState);

    localStorage.setItem("rteContent", html);
  };

  return (
    <div className="text-editor-container">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
      />
    </div>
  );
};

export default TextEditor;
