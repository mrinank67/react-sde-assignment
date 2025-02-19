import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

interface UserData {
  name: string;
  address: string;
  email: string;
  phone: string;
  id: string;
}

const UserForm: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = "";
        return "You have unsaved changes. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasUnsavedChanges]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const userData: UserData = {
      name,
      address,
      email,
      phone,
      id: uuidv4(),
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    setHasUnsavedChanges(false);
  };

  const handleChange = () => {
    setHasUnsavedChanges(true);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
          handleChange();
        }}
      />
      <input
        type="text"
        placeholder="Address"
        onChange={(e) => {
          setAddress(e.target.value);
          handleChange();
        }}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
          handleChange();
        }}
      />
      <input
        type="tel"
        placeholder="Phone"
        onChange={(e) => {
          setPhone(e.target.value);
          handleChange();
        }}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
