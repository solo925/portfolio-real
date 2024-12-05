import React from "react";
import { Link } from "react-router-dom";
import im from '../assets/images/img1.png';

const projects = [
    { id: 1, name: "PlantCare companion", description: "All-in-one app for plant enthusiasts", image: [im] },
    { id: 2, name: "PlantCare companion", description: "All-in-one app for plant enthusiasts", image: [im] },
    { id: 3, name: "PlantCare companion", description: "All-in-one app for plant enthusiasts", image: [im] },
    { id: 4, name: "PlantCare companion", description: "All-in-one app for plant enthusiasts", image: [im] },
    { id: 5, name: "Project Two", description: "This is project two", image: "/project2.png" }
];

const Projects = () => (
    <div style={styles.container}>
        {/* GitHub Link Section */}
        <div style={styles.githubLink}>
            <p>These are some of my work. To see all my work, visit my <a href="https://github.com/solo925" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        </div>

        {/* Project Cards */}
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
    </div>
);

const styles = {
    container: {
        padding: "20px",
    },
    githubLink: {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "1.2em",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        padding: "20px"
    },
    card: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px"
    },
    image: {
        width: "100%",
        borderRadius: "8px"
    }
};

export default Projects;
