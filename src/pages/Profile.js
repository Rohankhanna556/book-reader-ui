import React from "react";
import UserProfile from "../components/UserProfile";

function Profile({ onSelectBook }) {
  const userId = "currentUser"; // Replace with auth context later
  return <UserProfile userId={userId} onSelectBook={onSelectBook} />;
}

export default Profile;
