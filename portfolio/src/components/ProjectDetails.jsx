import React from "react";
import { useParams } from "react-router-dom";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/prof.png";

const projectDetails = {
    1: {
        name: "PlantCare Companion",
        description: "An app designed for plant enthusiasts that helps users care for their indoor and outdoor plants. Users can track plant health, set reminders for watering, fertilizing, and repotting, and get tips on plant care. Community Forum: A space for users to ask questions, share tips, etc. AR to visualize how a plant will look in their space before purchasing.",
        images: [img1, img2],
        captions: [
            "This is the homepage of the PlantCare Companion app where users can track plant health.",
            "This is the AR feature that helps visualize how plants will look in your space."
        ]
    },
    2: {
        name: "Car Game",
        description: "Tested an understanding of Python OOP by building a car game with Pygame.",
        images: ["/project2-1.png", "/project2-2.png"],
        captions: [
            "The car game interface with the main menu and start screen.",
            "The gameplay screen of the car game where the player drives a car through obstacles."
        ]
    }
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectDetails[id];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{project.name}</h1>
            <p style={styles.description}>{project.description}</p>

            <div style={styles.imageGallery}>
                {project.images.map((img, idx) => (
                    <div key={idx} style={styles.imageWrapper}>
                        <img src={img} alt={`Screenshot ${idx + 1}`} style={styles.image} />
                        <p style={styles.caption}>{project.captions[idx]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: "60%",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
    },
    title: {
        fontSize: "2em",
        marginBottom: "10px",
        color: "#333"
    },
    description: {
        fontSize: "1.2em",
        color: "#666",
        marginBottom: "20px",
        lineHeight: "1.6"
    },
    imageGallery: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        justifyContent: "center"
    },
    imageWrapper: {
        textAlign: "center",
    },
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out"
    },
    caption: {
        marginTop: "10px",
        fontSize: "1em",
        color: "#555",
        fontStyle: "italic"
    }
};

export default ProjectDetail;
