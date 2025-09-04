// External Libraries
import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";

// External Icons
import { FaGithub, FaCss3Alt, FaReact, FaSass, FaRust, FaJava, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SiFlask, SiSqlite, SiTypescript, SiTailwindcss, SiSupabase, SiPostgresql, SiExpo } from "react-icons/si";
import { DiDocker, DiMongodb } from "react-icons/di";
import { TbBrandMysql } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";

// Internal Assets
import auctionHouseImage from "@/assets/auction_house.png";
import taskManagementImage from "@/assets/task-management.png";
import eventManagementImage from "@/assets/event_management.png";
import jobPortalImage from "@/assets/job_portal.jpg";

// Stylesheets
import "./Projects.css";


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
        title: "Job Portal Mobile Application",
        background: jobPortalImage,
        technologies: [
            { icon: <FaReact />, title: "React Native" },
            { icon: <SiExpo />, title: "Expo" },
            { icon: <FaJava />, title: "Java" },
            { icon: <DiMongodb />, title: "MongoDB" },
            { icon: <DiDocker />, title: "Docker" },
        ],
        repository: "https://github.com/Hauh4444/Job-Portal",
    },
]


const Projects = ({ ref }) => {
    const projectsRef = useRef(null);
    const [leftOpacity, setLeftOpacity] = useState(0);
    const [rightOpacity, setRightOpacity] = useState(1);

    const scroll = (direction) => {
        if (!projectsRef.current) return;
        const scrollAmount = projectsRef.current.clientWidth * 0.8;
        projectsRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth"
        });
    };

    const updateOpacity = () => {
        if (!projectsRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = projectsRef.current;
        const epsilon = 3;

        setLeftOpacity(scrollLeft <= epsilon ? 0 : Math.min(scrollLeft / 50, 1));
        setRightOpacity(scrollLeft + clientWidth >= scrollWidth - epsilon ? 0 : Math.min((scrollWidth - clientWidth - scrollLeft) / 50, 1));
    };

    const handleWheel = (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
            e.preventDefault();
            const scrollAmount = (e.deltaX || e.deltaY) * 0.5;
            projectsRef.current?.scrollBy({
                left: scrollAmount,
                behavior: "auto"
            });
        }
    };

    useEffect(() => {
        const container = projectsRef.current;
        if (!container) return;

        updateOpacity();
        container.addEventListener("scroll", updateOpacity);
        container.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("resize", updateOpacity);

        return () => {
            container.removeEventListener("scroll", updateOpacity);
            container.removeEventListener("wheel", handleWheel);
            window.removeEventListener("resize", updateOpacity);
        };
    }, []);

    return (
        <>
            <h2 ref={ ref }>Projects</h2>
            <div className="wrapper">
                <div className="blur left" />
                <Button
                    className="scrollBtn left"
                    style={{ opacity: leftOpacity }}
                    onClick={() => scroll("left")}
                >
                    <FaChevronLeft />
                </Button>

                <div className="projects" ref={ projectsRef }>
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

                <div className="blur right" />
                <Button
                    className="scrollBtn right"
                    style={{ opacity: rightOpacity }}
                    onClick={() => scroll("right")}
                >
                    <FaChevronRight />
                </Button>
            </div>
        </>
    )
}


export default Projects;