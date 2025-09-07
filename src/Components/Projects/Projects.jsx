// External Libraries
import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";

// External Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Internal Assets
import { CustomIcon } from "@/Components/CustomIcon/CustomIcon.jsx";
import auctionHouseImage from "@/assets/auction_house.png";
import knowledgeHubImage from "@/assets/knowledge_hub.png";
import taskManagementImage from "@/assets/task-management.png";
import eventManagementImage from "@/assets/event_management.png";
import jobPortalImage from "@/assets/job_portal.jpg";

// Stylesheets
import "./Projects.css";


const projects = [
    {
        title: "Knowledge Hub",
        background: knowledgeHubImage,
        technologies: [
            { icon: <CustomIcon size={ 20 } icon="react" />, title: "React" },
            { icon: <CustomIcon size={ 20 } icon="typescript" />, title: "TypeScript" },
            { icon: <CustomIcon size={ 20 } icon="supabase" />, title: "Supabase" },
            { icon: <CustomIcon size={ 20 } icon="postgresql" />, title: "PostgreSQL" },
            { icon: <CustomIcon size={ 20 } icon="tailwindcss" />, title: "Tailwind CSS" },
        ],
        repository: "https://github.com/Hauh4444/knowledge-hub",
        demo: "https://main.dqmj7t8wgu1v0.amplifyapp.com/"
    },
    {
        title: "Auction House/E-commerce System",
        background: auctionHouseImage,
        technologies: [
            { icon: <CustomIcon size={ 20 } icon="react" />, title: "React" },
            { icon: <CustomIcon size={ 20 } icon="javascript" />, title: "JavaScript" },
            { icon: <CustomIcon size={ 20 } icon="sass" />, title: "SASS" },
            { icon: <CustomIcon size={ 20 } icon="flask" />, title: "Flask" },
            { icon: <CustomIcon size={ 20 } icon="mysql" />, title: "MySQL" },
        ],
        repository: "https://github.com/Hauh4444/Auction-House",
    },
    {
        title: "Task Management System",
        background: taskManagementImage,
        technologies: [
            { icon: <CustomIcon size={ 20 } icon="react" />, title: "React" },
            { icon: <CustomIcon size={ 20 } icon="typescript" />, title: "TypeScript" },
            { icon: <CustomIcon size={ 20 } icon="supabase" />, title: "Supabase" },
            { icon: <CustomIcon size={ 20 } icon="postgresql" />, title: "PostgreSQL" },
            { icon: <CustomIcon size={ 20 } icon="tailwindcss" />, title: "Tailwind CSS" },
        ],
        repository: "https://github.com/Hauh4444/task-management",
        demo: "https://main.dk2nrxxcpt5un.amplifyapp.com/"
    },
    {
        title: "Event Management System",
        background: eventManagementImage,
        technologies: [
            { icon: <CustomIcon size={ 20 } icon="react" />, title: "React" },
            { icon: <CustomIcon size={ 20 } icon="javascript" />, title: "JavaScript" },
            { icon: <CustomIcon size={ 20 } icon="css3" />, title: "CSS" },
            { icon: <CustomIcon size={ 20 } icon="rust" />, title: "Rust" },
            { icon: <CustomIcon size={ 20 } icon="sqlite" />, title: "SQLite" },
        ],
        repository: "https://github.com/Hauh4444/Event-Management",
    },
    {
        title: "Job Portal Mobile Application",
        background: jobPortalImage,
        technologies: [
            { icon: <CustomIcon size={ 20 } icon="react" />, title: "React Native" },
            { icon: <CustomIcon size={ 20 } icon="javascript" />, title: "JavaScript" },
            { icon: <CustomIcon size={ 20 } icon="java" />, title: "Java" },
            { icon: <CustomIcon size={ 20 } icon="mongodb" />, title: "MongoDB" },
            { icon: <CustomIcon size={ 20 } icon="docker" />, title: "Docker" },
        ],
        repository: "https://github.com/Hauh4444/Job-Portal",
    },
]


const Projects = () => {
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
        <div className="projects">
            <h2>Projects</h2>
            <div className="wrapper">
                <div className="blur left" />
                <Button
                    className="scrollBtn left"
                    style={{ opacity: leftOpacity }}
                    onClick={() => scroll("left")}
                >
                    <FaChevronLeft />
                </Button>

                <div className="items" ref={ projectsRef }>
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
                                        <CustomIcon size={ 20 } icon="github"/> Repository
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
                                            <CustomIcon size={ 20 } icon="globe"/> Live Demo
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
        </div>
    )
}


export default Projects;