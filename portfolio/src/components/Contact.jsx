// src/components/Contact.js
import React from "react";

const Contact = () => (
    <div style={styles.container}>
        <h1>Contact Me</h1>
        <p>Email: <a href="mailto:solomononyango925@gmail.com">solomononyango925@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">Profile</a></p>
        <p>GitHub: <a href="https://github.com/solo925" target="_blank" rel="noreferrer">solo925</a></p>
    </div>
);

const styles = { container: { padding: "20px" } };

export default Contact;
