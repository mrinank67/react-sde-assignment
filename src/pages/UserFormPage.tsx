import React from "react";
import UserForm from "../components/UserForm"; // Adjust path if needed

const UserFormPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>User Form</h1>
      <UserForm />
    </div>
  );
};

export default UserFormPage;
