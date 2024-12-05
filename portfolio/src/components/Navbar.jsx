import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav style={styles.navbar}>
        <h1 style={styles.logo}>My Portfolio</h1>
        <div>
            <Link style={styles.link} to="/">Home</Link>
            <Link style={styles.link} to="/projects">Projects</Link>
            <Link style={styles.link} to="/contact">Contact</Link>
            <Link style={styles.link} to="/cv">cv</Link>
        </div>
    </nav>
);

const styles = {
    navbar: { display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#282c34" },
    logo: { color: "#61dafb" },
    link: { margin: "0 10px", color: "#fff", textDecoration: "none" }
};

export default Navbar;
