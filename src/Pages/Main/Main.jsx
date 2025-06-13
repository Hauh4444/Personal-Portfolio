// Internal Modules
import Head from "@/Components/Head/Head.jsx";
import Education from "@/Components/Education/Education.jsx";
import Skills from "@/Components/Skills/Skills.jsx";
import Expertise from "@/Components/Expertise/Expertise.jsx";
import Projects from "@/Components/Projects/Projects.jsx";
import Links from "@/Components/Links/Links.jsx";

// Stylesheets
import "./Main.css";


const Main = () => {
    return (
        <div className="mainPage">
            <Head />

            <div className="content">
                <Skills />
                <Expertise />
                <Projects />
                <Education />
                <Links />
            </div>
        </div>
    )
}


export default Main;