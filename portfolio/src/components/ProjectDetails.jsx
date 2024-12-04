// src/components/ProjectDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { default as img1, default as img2 } from "../assets/images/img1.png";

const projectDetails = {
    1: { name: "PlantCare companion", description: "An app designed for plant enthusiasts that helps users care for their indoor and outdoor plants. Users can track plant health, set reminders for watering, fertilizing, and repotting, and get tips on plant care.Community Forum: A space for users to ask questions, share tips, etc.AR to visualize how a plant will look in their space before purchasing ", images: [img1, img2] },
    2: { name: "car Game", description: "tested an undestanding of python oop by building a car game with pygame", images: ["/project2-1.png", "/project2-2.png"] }
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectDetails[id];

    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div style={styles.imageContainer}>
                {project.images.map((img, idx) => (
                    <img key={idx} src={img} alt={`Screenshot ${idx + 1}`} style={styles.image} />
                ))}
            </div>
        </div>
    );
};

const styles = {
    imageContainer: { display: "flex", gap: "10px", marginTop: "10px" },
    image: { width: "200px", borderRadius: "8px" }
};

export default ProjectDetail;
