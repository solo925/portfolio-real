import React from "react";

const cvDownloadLink = "/cvport.pdf"; // File in the 'public' directory

const CV = () => {
    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>

                <div style={styles.downloadButtonContainer}>
                    <a href={cvDownloadLink} download style={styles.downloadButton}>
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
    },
    container: {
        // backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        padding: "5px",
        // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
    },
    heading: {
        fontSize: "2.5em",
        marginBottom: "20px",
        color: "#333",
    },
    downloadButtonContainer: {
        marginTop: "20px",
    },
    downloadButton: {
        padding: "12px 25px",
        backgroundColor: "#007bff",
        color: "#fff",
        borderRadius: "5px",
        textDecoration: "none",
        fontSize: "1.2em",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
};

export default CV;
