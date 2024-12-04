// src/components/Projects.js
import React from "react";
import { Link } from "react-router-dom";

const projects = [
    { id: 1, name: "Project One", description: "This is project one", image: "../assets/images/img1.png" },
    { id: 2, name: "Project Two", description: "This is project two", image: "/project2.png" }
];

const Projects = () => (
    <div style={styles.grid}>
        {projects.map((project) => (
            <div key={project.id} style={styles.card}>
                <img src={project.image} alt={project.name} style={styles.image} />
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <Link to={`/projects/${project.id}`}>More</Link>
            </div>
        ))}
    </div>
);

const styles = {
    grid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", padding: "20px" },
    card: { border: "1px solid #ccc", borderRadius: "8px", padding: "10px" },
    image: { width: "100%", borderRadius: "8px" }
};

export default Projects;
