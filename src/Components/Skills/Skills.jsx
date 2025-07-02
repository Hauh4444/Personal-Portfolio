// External Icons
import { FaJava, FaHtml5, FaCss3Alt, FaSass, FaPhp, FaRust, FaPython, FaDatabase, FaReact, FaVuejs, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { LuArrowUpDown } from "react-icons/lu";
import { SiVite, SiFlask, SiDjango, SiSqlite } from "react-icons/si";
import { DiDocker, DiJqueryLogo, DiMongodb } from "react-icons/di";
import { TbBrandMysql } from "react-icons/tb";

// Stylesheets
import "./Skills.css";


const Skills = () => {
    const skills = [
        { icon: <FaJava />, title: "Java" },
        { icon: <IoLogoJavascript />, title: "JavaScript" },
        { icon: <FaHtml5 />, title: "HTML" },
        { icon: <FaCss3Alt />, title: "CSS" },
        { icon: <FaSass />, title: "SASS" },
        { icon: <FaPhp />, title: "PHP" },
        { icon: <FaRust />, title: "Rust" },
        { icon: <FaPython />, title: "Python" },
        { icon: <FaDatabase />, title: "SQL" },
        { icon: <LuArrowUpDown />, title: "Ajax" },
        { icon: <FaReact />, title: "React" },
        { icon: <FaReact />, title: "React Native" },
        { icon: <FaVuejs />, title: "Vue" },
        { icon: <SiVite />, title: "Vite" },
        { icon: <FaNodeJs />, title: "Node.js" },
        { icon: <SiFlask />, title: "Flask" },
        { icon: <SiDjango />, title: "Django" },
        { icon: <DiJqueryLogo />, title: "jQuery" },
        { icon: <TbBrandMysql />, title: "MySQL" },
        { icon: <DiMongodb />, title: "MongoDB" },
        { icon: <SiSqlite />, title: "SQLite" },
        { icon: <DiDocker />, title: "Docker" },
    ]


    return (
        <>
            <h2>Skills</h2>
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