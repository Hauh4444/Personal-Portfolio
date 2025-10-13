import { Button } from "@mui/material";
import { CustomIcon } from "@/components/CustomIcon/CustomIcon.jsx";
import "./HeroSection.css";


const HeroSection = ({ project }) => {
    return (
        <section className="hero-section">
            <div className="hero-image-container">
                <img src={project.image} alt={project.title} className="hero-image" />
                <div className="hero-overlay" />
            </div>
            <div className="hero-content">
                <h1>{project.title}</h1>
                <p className="project-tagline">{project.tagline}</p>
                <div className="hero-actions">
                    {project.repository && (
                        <Button
                            variant="contained"
                            className="action-btn primary"
                            component="a"
                            href={project.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<CustomIcon size={20} icon="github" />}
                        >
                            View Repository
                        </Button>
                    )}
                    {project.demo && (
                        <Button
                            variant="outlined"
                            className="action-btn secondary"
                            component="a"
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<CustomIcon size={20} icon="globe" />}
                        >
                            Live Demo
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
};


export default HeroSection;
