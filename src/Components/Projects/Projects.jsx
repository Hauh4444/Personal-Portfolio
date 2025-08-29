// External Libraries
import { Button } from "@mui/material";

// External Icons
import {
    FaGithub, FaCss3Alt, FaReact, FaSass, FaRust, FaLock, FaJava, FaTools
} from "react-icons/fa";
import { SiFlask, SiSqlite, SiTypescript, SiTailwindcss, SiSupabase, SiPostgresql, SiExpo } from "react-icons/si";
import { DiDocker, DiMongodb } from "react-icons/di";
import { TbBrandMysql } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";

// Internal Assets
import auctionHouseImage from "@/assets/auction_house.png";
import taskManagementImage from "@/assets/task-management.png";
import eventManagementImage from "@/assets/event_management.png";
import jobPortalAppImage from "@/assets/job_portal_app.jpg";
import jobPortalImage from "@/assets/job_portal.jpg";

// Stylesheets
import "./Projects.css";


const Projects = ({ ref }) => {
    const projects = [
        {
            title: "Task Management System",
            background: taskManagementImage,
            technologies: [
                { icon: <FaReact />, title: "React" },
                { icon: <SiTypescript />, title: "TypeScript" },
                { icon: <SiSupabase />, title: "Supabase" },
                { icon: <SiPostgresql />, title: "PostgreSQL" },
                { icon: <SiTailwindcss />, title: "Tailwind CSS" },
            ],
            repository: "https://github.com/Hauh4444/task-management",
            demo: "https://main.dk2nrxxcpt5un.amplifyapp.com/"
        },
        {
            title: "Auction House/E-commerce System",
            background: auctionHouseImage,
            technologies: [
                { icon: <FaReact />, title: "React" },
                { icon: <FaSass />, title: "SASS" },
                { icon: <SiFlask />, title: "Flask" },
                { icon: <TbBrandMysql />, title: "MySQL" },
            ],
            repository: "https://github.com/Hauh4444/Auction-House",
        },
        {
            title: "Event Management System",
            background: eventManagementImage,
            technologies: [
                { icon: <FaReact />, title: "React" },
                { icon: <FaCss3Alt />, title: "CSS" },
                { icon: <FaRust />, title: "Rust" },
                { icon: <SiSqlite />, title: "SQLite" },
            ],
            repository: "https://github.com/Hauh4444/Event-Management",
        },
        {
            title: "Job Portal Application",
            background: jobPortalAppImage,
            technologies: [
                { icon: <FaReact />, title: "React Native" },
                { icon: <SiExpo />, title: "Expo" },
                { icon: <SiTypescript />, title: "Context API" },
                { icon: <FaLock />, title: "Secure Storage" },
            ],
            repository: "https://github.com/Hauh4444/Job-Portal-App",
        },
        {
            title: "Job Portal API",
            background: jobPortalImage,
            technologies: [
                { icon: <FaJava />, title: "Java" },
                { icon: <FaTools />, title: "Java CLI" },
                { icon: <DiMongodb />, title: "MongoDB" },
                { icon: <DiDocker />, title: "Docker" },
            ],
            repository: "https://github.com/Hauh4444/Job-Portal",
        },
    ]


    return (
        <>
            <h2 ref={ ref }>Projects</h2>
            <div className="projects">
                { projects.map((project, index) => (
                    <div className="item" key={ index }>
                        <img src={ project.background } alt={ project.title } className="project-image" />
                        <div className="overlay" />
                        <div className="itemContent">
                            <h3>{ project.title }</h3>
                            <span>
                                { project.technologies.map((technology, index) => (
                                    <div className="technology" key={ index }>
                                        { technology.icon } { technology.title }
                                    </div>
                                )) }
                            </span>
                            <span className="links">
                                <Button
                                    className="btn"
                                    size="small"
                                    component="a"
                                    href={ project.repository }
                                    title={ project.repository }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub /> Repository
                                </Button>
                                { project.demo && (
                                    <Button
                                        className="btn"
                                        size="small"
                                        component="a"
                                        href={ project.demo }
                                        title={ project.demo }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FiGlobe /> Live Demo
                                    </Button>
                                ) }
                            </span>
                        </div>
                    </div>
                )) }
            </div>
        </>
    )
}


export default Projects;