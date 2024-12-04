// src/components/Home.js
import React from "react";

const Home = () => (
    <div style={styles.container}>
        <img src="/profile.jpg" alt="Profile" style={styles.profilePic} />
        <div>
            <h1>A Dedicated Software Engineer</h1>
            <p>Welcome to my portfolio! Explore my projects and feel free to connect.</p>
        </div>
    </div>
);

const styles = {
    container: { display: "flex", alignItems: "center", marginTop: "20px" },
    profilePic: { width: "150px", height: "150px", borderRadius: "50%", marginRight: "20px" }
};

export default Home;
