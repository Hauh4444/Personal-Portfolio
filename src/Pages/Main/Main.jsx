// Internal Modules
import NavBar from "@/Components/NavBar/NavBar.jsx";
import Head from "@/Components/Head/Head.jsx";
import Education from "@/Components/Education/Education.jsx";
import Skills from "@/Components/Skills/Skills.jsx";
import Expertise from "@/Components/Expertise/Expertise.jsx";
import Projects from "@/Components/Projects/Projects.jsx";
import Links from "@/Components/Links/Links.jsx";

// Stylesheets
import "./Main.css";
import {useRef} from "react";


const Main = () => {
    const headRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const educationRef = useRef(null);
    const linksRef = useRef(null);


    return (
        <div className="mainPage">
            <NavBar
                headRef={ headRef }
                aboutRef={ aboutRef }
                projectsRef={ projectsRef }
                educationRef={ educationRef }
                linksRef={ linksRef }
            />

            <Head ref={ headRef }/>

            <div className="content">
                <Skills ref={ aboutRef } />
                <Expertise />
                <Projects ref={ projectsRef } />
                <Education ref={ educationRef } />
                <Links ref={ linksRef } />
            </div>
        </div>
    )
}


export default Main;