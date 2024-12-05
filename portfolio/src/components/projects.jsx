import React from "react";
import { Link } from "react-router-dom";
import cover from '../assets/images/plantcare/cover.webp';



const projects = [

    { id: 1, name: "Plant care companion App", description: "All in one app for indoor/outdoor plants", image: [cover] }
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
