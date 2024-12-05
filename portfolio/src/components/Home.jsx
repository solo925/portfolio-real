import React from "react";
import im from "../assets/images/prof.png";

const Home = () => (
    <div style={styles.container}>
        <img src={im} alt="Profile" style={styles.profilePic} />
        <div style={styles.content}>
            <h2>Software Engineer/fullstack dev</h2>
            <p>Welcome to my portfolio! Explore my projects and feel free to connect.</p>
        </div>
    </div>
);

const styles = {
    container: { display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", marginLeft: "20px", width: "80vw" },
    profilePic: { width: "320px", height: "320px", borderRadius: "50%", marginRight: "50px", objectFit: "cover" },
    content: { display: "flex", flexDirection: "row", flexWrap: "wrap", width: "480px" }
};

export default Home;
