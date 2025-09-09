// Internal Assets
import { CustomIcon } from "@/Components/CustomIcon/CustomIcon.jsx";

// Stylesheets
import "./Skills.css";


const languages = [
    { icon: <CustomIcon icon="javascript" />, title: "JavaScript" },
    { icon: <CustomIcon icon="typescript" />, title: "TypeScript" },
    { icon: <CustomIcon icon="python" />, title: "Python" },
    { icon: <CustomIcon icon="java" />, title: "Java" },
    { icon: <CustomIcon icon="rust" />, title: "Rust" },
    { icon: <CustomIcon icon="html5" />, title: "HTML" },
    { icon: <CustomIcon icon="css3" />, title: "CSS" },
    { icon: <CustomIcon icon="sass" />, title: "SASS" },
    { icon: <CustomIcon icon="sql" />, title: "SQL" },
];

const frameworks = [
    { icon: <CustomIcon icon="react" />, title: "React" },
    { icon: <CustomIcon icon="react" />, title: "React Native" },
    { icon: <CustomIcon icon="vue" />, title: "Vue" },
    { icon: <CustomIcon icon="nodejs" />, title: "Node.js" },
    { icon: <CustomIcon icon="flask" />, title: "Flask" },
    { icon: <CustomIcon icon="django" />, title: "Django" },
    { icon: <CustomIcon icon="tailwindcss" />, title: "Tailwind CSS" },
];

const databases = [
    { icon: <CustomIcon icon="supabase" />, title: "Supabase" },
    { icon: <CustomIcon icon="mysql" />, title: "MySQL" },
    { icon: <CustomIcon icon="postgresql" />, title: "PostgreSQL" },
    { icon: <CustomIcon icon="mongodb" />, title: "MongoDB" },
    { icon: <CustomIcon icon="docker" />, title: "Docker" },
    { icon: <CustomIcon icon="git" />, title: "Git" },
    { icon: <CustomIcon icon="github" />, title: "GitHub" },
];


const Skills = () => {
    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="items">
                { languages.map((item, index) => (
                    <div className="item" key={ index }>
                        { item.icon } { item.title }
                    </div>
                )) }
            </div>
            <div className="items">
                { frameworks.map((item, index) => (
                    <div className="item" key={ index }>
                        { item.icon } { item.title }
                    </div>
                )) }
            </div>
            <div className="items">
                { databases.map((item, index) => (
                    <div className="item" key={ index }>
                        { item.icon } { item.title }
                    </div>
                )) }
            </div>
        </div>
    )
}


export default Skills;