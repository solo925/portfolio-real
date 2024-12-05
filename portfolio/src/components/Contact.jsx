import React from "react";

const Contact = () => (
    <div style={styles.wrapper}>
        <div style={styles.container}>
            <h1 style={styles.heading}>Contact Me</h1>
            <p style={styles.text}>
                Email: <a href="mailto:solomononyango925@gmail.com">solomononyango925@gmail.com</a>
            </p>
            <p style={styles.text}>
                LinkedIn:{" "}
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
                    Profile
                </a>
            </p>
            <p style={styles.text}>
                GitHub:{" "}
                <a href="https://github.com/solo925" target="_blank" rel="noreferrer">
                    solo925
                </a>
            </p>
            <p style={styles.text}>Phone: +254702970055</p>
        </div>
    </div>
);

const styles = {
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
    },
    container: {
        padding: "20px",
        textAlign: "center",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        width: "90%",
    },
    heading: {
        fontSize: "24px",
        marginBottom: "20px",
        color: "#333",
    },
    text: {
        fontSize: "16px",
        margin: "10px 0",
        color: "#555",
    },
};

export default Contact;
