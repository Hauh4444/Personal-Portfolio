import Head from "@/components/Head/Head.jsx";
import Skills from "@/components/Skills/Skills.jsx";
import Expertise from "@/components/Expertise/Expertise.jsx";
import Projects from "@/components/Projects/Projects.jsx";
import "./Main.css";


const Main = () => {
    return (
        <div className="mainPage">
            <Head />
            <div className="content">
                <Skills />
                <Expertise />
                <Projects />
            </div>
        </div>
    );
};


export default Main;
