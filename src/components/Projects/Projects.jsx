import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomIcon } from "@/components/CustomIcon/CustomIcon.jsx";
import { projects } from "@/data/projectsData.js";
import "./Projects.css";


const Projects = () => {
    const navigate = useNavigate();

    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="items">
                {projects.map((project, index) => (
                    <div className="item" key={index}>
                        <img src={project.background} alt={project.title} className="project-image" />
                        <div className="overlay" />
                        <div className="itemContent">
                            <h3>{project.title}</h3>
                            <span>
                                {project.technologies.map((technology, techIndex) => (
                                    <div className="technology" key={techIndex}>
                                        <CustomIcon size={20} icon={technology.iconName} /> {technology.title}
                                    </div>
                                ))}
                            </span>
                            <span className="links">
                                <Button
                                    className="btn"
                                    size="small"
                                    onClick={() => navigate(`/project/${project.id}`)}
                                >
                                    <CustomIcon size={20} icon="plus" /> Read More
                                </Button>
                                <Button
                                    className="btn"
                                    size="small"
                                    component="a"
                                    href={project.repository}
                                    title={project.repository}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <CustomIcon size={20} icon="github" /> Repository
                                </Button>
                                {project.demo && (
                                    <Button
                                        className="btn"
                                        size="small"
                                        component="a"
                                        href={project.demo}
                                        title={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CustomIcon size={20} icon="globe" /> Live Demo
                                    </Button>
                                )}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Projects;
