// External Libraries
import { Button } from "@mui/material";

// External Icons
import { FaGithub } from "react-icons/fa";
import { FaCss3Alt, FaReact, FaSass, FaRust } from "react-icons/fa";
import { SiFlask, SiSqlite } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

// Internal Assets
import auctionHouseImage from "@/assets/auction_house.png";
import eventManagementImage from "@/assets/event_management.png";

// Stylesheets
import "./Projects.css";


const Projects = () => {
    const projects = [
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
    ]


    return (
        <>
            <h2>Projects</h2>
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
                        </div>
                    </div>
                )) }
            </div>
        </>
    )
}


export default Projects;