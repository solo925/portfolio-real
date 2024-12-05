import React from "react";

const Home = () => {
    const profilePhoto = ""; // Example variable for the profile photo URL
    const defaultAvatar = "https://ui-avatars.com/api/?name=Solomon+Ndeda"; // Online avatar with initials

    return (
        <div style={styles.container}>
            <img
                src={profilePhoto || defaultAvatar} // Use defaultAvatar if profilePhoto is empty
                alt="Profile"
                style={styles.profilePic}
            />
            <div style={styles.content}>
                <h2>Software Engineer / Fullstack Developer</h2>
                <p>Welcome to my portfolio! Explore my projects and feel free to connect.</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
        marginLeft: "20px",
        width: "80vw",
    },
    profilePic: {
        width: "320px",
        height: "320px",
        borderRadius: "50%",
        marginRight: "50px",
        objectFit: "cover",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        width: "480px",
    },
};

export default Home;
