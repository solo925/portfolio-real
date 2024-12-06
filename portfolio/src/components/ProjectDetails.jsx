import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ai from '../assets/images/plantcare/ai.png';
import ar from '../assets/images/plantcare/artest1.png';
import ar2 from '../assets/images/plantcare/artest2.png';
import chat from '../assets/images/plantcare/chat.jpeg';
import chat2 from '../assets/images/plantcare/chat2.jpeg';
import commun from '../assets/images/plantcare/community1.png';
import commun2 from '../assets/images/plantcare/community2.png';
import commun4 from '../assets/images/plantcare/community4_comme.png';
import dashboard from '../assets/images/plantcare/dashboard.png';
import home from '../assets/images/plantcare/home.png';
import landing from '../assets/images/plantcare/landing.png';
import profile from '../assets/images/plantcare/profile.png';
import care from '../assets/images/plantcare/plantcaretips.png';


const projectDetails = {
    1: {
        name: "PlantCare Companion",
        description:
            "An app designed for plant enthusiasts that helps users care for their indoor and outdoor plants. Users can track plant health, set reminders for watering, fertilizing, and repotting, and get tips on plant care. Community Forum: A space for users to ask questions, share tips, etc. AR to visualize how a plant will look in their space before purchasing.",
        techStack: ["React", "Node.js", "Express", "postgreSQL", "Three js", "Typescript", "css"],
        images: [landing, home, dashboard, profile, commun, commun2, commun4, care, ai, chat, chat2, ar, ar2],
        captions: [
            "This is the landing page.",
            "A user is redirected to the home page after logging in.",
            "A user can visit their dashboard and view their details, the plants they own.",
            "A user can visit their profile and edit/customize it with necessary details.",
            "A user can view the community forum and ask questions, share tips, add posts, comment on posts, and like posts.",
            "A user can view the community forum and ask questions, share tips, add posts, comment on posts, and like posts.",
            "A user can view the community forum and ask questions, share tips, add posts, comment on posts, and like posts.",
            "users can view the care tips and explore care tutoroals for their plants.",
            "user can use integrated ai to diagnose their plant's health.",
            "User can join rooms, create rooms, and chat with other online users, also send private messages.",
            "User can join rooms, create rooms, and chat with other online users, also send private messages.",
            "Sample room with the model before testing how it will look in the user's space.",
            "Sample room after placing it on a smaller table."
        ],
        githubLink: "https://github.com/solo925/Plant-Care-Companion-App"
    },
    2: {
        name: "Car Game",
        description:
            "Tested an understanding of Python OOP by building a car game with Pygame.",
        techStack: ["Python", "Pygame"],
        images: ["/project2-1.png", "/project2-2.png"],
        captions: [
            "The car game interface with the main menu and start screen.",
            "The gameplay screen of the car game where the player drives a car through obstacles."
        ],
        githubLink: "https://github.com/your-username/car-game"
    }
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectDetails[id];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage(null);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{project.name}</h1>
            <p style={styles.description}>{project.description}</p>

            {/* Tech Stack Section */}
            <div style={styles.techStackContainer}>
                <h3>Tech Stack:</h3>
                <ul style={styles.techStackList}>
                    {project.techStack.map((tech, index) => (
                        <li key={index} style={styles.techStackItem}>{tech}</li>
                    ))}
                </ul>
            </div>
            {
                <h3>fell free to click on image to zoom</h3>
            }

            {/* Screenshot Gallery */}
            <div style={styles.imageGallery}>
                {project.images.map((img, idx) => (
                    <div key={idx} style={styles.imageWrapper}>
                        <div
                            onClick={() => openModal(img)}
                            style={styles.imageCard} // Card for the image
                        >
                            <img src={img} alt={`Screenshot ${idx + 1}`} style={styles.image} />
                        </div>
                        <p style={styles.caption}>{project.captions[idx]}</p>
                    </div>
                ))}
            </div>

            {/* GitHub Link Section */}
            <div style={styles.githubLinkContainer}>
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.githubLink}
                >
                    View the Source Code on GitHub
                </a>
            </div>

            {isModalOpen && (
                <div style={styles.modalOverlay} onClick={closeModal}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img src={modalImage} alt="Expanded" style={styles.modalImage} />
                        <button onClick={closeModal} style={styles.closeButton}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        width: "70%",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: "2.5em",
        marginBottom: "10px",
        color: "#333",
    },
    description: {
        fontSize: "1.3em",
        color: "#444",
        marginBottom: "20px",
        lineHeight: "1.8",
        textAlign: "left",
    },
    techStackContainer: {
        marginBottom: "30px",
        textAlign: "left",
    },
    techStackList: {
        listStyleType: "none",
        paddingLeft: "0",
        fontSize: "1.1em",
        color: "#555",
    },
    techStackItem: {
        background: "#f0f0f0",
        margin: "5px 0",
        padding: "8px",
        borderRadius: "4px",
    },
    imageGallery: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        justifyContent: "center",
        paddingBottom: "20px",
    },
    imageWrapper: {
        textAlign: "center",
    },
    imageCard: {
        width: "100%",
        height: "300px",
        maxWidth: "400px",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        borderRadius: "8px",
    },
    caption: {
        marginTop: "10px",
        fontSize: "1em",
        color: "#555",
        fontStyle: "italic",
    },
    githubLinkContainer: {
        marginTop: "30px",
    },
    githubLink: {
        color: "#fff",
        backgroundColor: "#007bff",
        padding: "10px 20px",
        fontSize: "1.1em",
        borderRadius: "5px",
        textDecoration: "none",
    },
    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
    },
    modalContent: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        maxWidth: "90%",
        maxHeight: "80%",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    },
    modalImage: {
        width: "100%",
        height: "auto",
        borderRadius: "8px",
    },
    closeButton: {
        position: "absolute",
        top: "10px",
        right: "10px",
        backgroundColor: "#ff5c5c",
        color: "#fff",
        padding: "10px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
    },
};

export default ProjectDetail;
