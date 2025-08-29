// External Icons
import {
    FaJava, FaHtml5, FaCss3Alt, FaSass, FaPhp, FaRust, FaPython, FaDatabase,
    FaReact, FaVuejs, FaNodeJs, FaGitAlt, FaGithub
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
    SiTypescript, SiVite, SiFlask, SiDjango, SiSqlite,
    SiTailwindcss, SiPostgresql, SiSupabase
} from "react-icons/si";
import { DiDocker, DiMongodb } from "react-icons/di";
import { TbBrandMysql } from "react-icons/tb";

// Stylesheets
import "./Skills.css";


const skills = [
    { icon: <IoLogoJavascript />, title: "JavaScript" },
    { icon: <SiTypescript />, title: "TypeScript" },
    { icon: <FaPython />, title: "Python" },
    { icon: <FaRust />, title: "Rust" },
    { icon: <FaJava />, title: "Java" },
    { icon: <FaHtml5 />, title: "HTML" },
    { icon: <FaCss3Alt />, title: "CSS" },
    { icon: <FaSass />, title: "SASS" },
    { icon: <FaDatabase />, title: "SQL" },
    { icon: <FaPhp />, title: "PHP" },
    { icon: <FaReact />, title: "React" },
    { icon: <FaReact />, title: "React Native" },
    { icon: <FaVuejs />, title: "Vue" },
    { icon: <SiVite />, title: "Vite" },
    { icon: <FaNodeJs />, title: "Node.js" },
    { icon: <SiFlask />, title: "Flask" },
    { icon: <SiDjango />, title: "Django" },
    { icon: <SiTailwindcss />, title: "Tailwind CSS" },
    { icon: <SiSupabase />, title: "Supabase" },
    { icon: <TbBrandMysql />, title: "MySQL" },
    { icon: <SiSqlite />, title: "SQLite" },
    { icon: <SiPostgresql />, title: "PostgreSQL" },
    { icon: <DiMongodb />, title: "MongoDB" },
    { icon: <DiDocker />, title: "Docker" },
    { icon: <FaGitAlt />, title: "Git" },
    { icon: <FaGithub />, title: "GitHub" },
]


const Skills = ({ ref }) => {
    return (
        <>
            <h2 ref={ ref }>Skills</h2>
            <div className="skills">
                { skills.map((item, index) => (
                    <div className="item" key={ index }>
                        { item.icon } { item.title }
                    </div>
                )) }
            </div>
        </>
    )
}


export default Skills;