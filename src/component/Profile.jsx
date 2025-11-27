import React, { useState, useEffect } from "react";
import note4 from '../assets/note4.jpg'

function Profile() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState(null);
  const [photoFile,setPhotoFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const fetchProfile = () => {
    if (!token) return;

    fetch("https://note-backend-wdzp.onrender.com/user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setFullName(data.fullName);
        setEmail(data.email);
        setPhotoUrl(data.photo);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Failed to fetch profile");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", fullName);
    if (photoFile) formData.append("photo", photoFile);

    fetch("https://note-backend-wdzp.onrender.com/user/profile", {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage("Profile updated successfully");
        setFullName(data.fullName);
        setEmail(data.email);
        setPhotoUrl(data.photo);
        setPhotoFile(null);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Update failed");
      });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "90vh" }}>
      <img style={{height:"100vh"}} src={note4} alt="" />
      <div id="content">
      <h1>My Profile</h1>
      {message && <p>{message}</p>}
      <form id="profile-form" onSubmit={handleUpdate} style={{ display: "flex", flexDirection: "column", gap: "15px", width: "300px", alignItems: "center"}}>
        
        <img
  src={photoFile ? URL.createObjectURL(photoFile) : photoUrl ? `${photoUrl}?t=${Date.now()}`: "https://via.placeholder.com/150"}
  alt="Profile"
  style={{ width: "150px", height: "150px", borderRadius: "50%" }}
/>

        <input type="file" 
        name="photo"
        accept="image/*" onChange={(e) => setPhotoFile(e.target.files[0])} />
        <label>Full Name</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <label>Email</label>
        <input type="email" value={email} disabled />
        <button type="submit">Update</button>
      </form>
      </div>
    </div>
  );
}

export default Profile;
