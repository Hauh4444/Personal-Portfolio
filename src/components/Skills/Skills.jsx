import { CustomIcon } from "@/components/CustomIcon/CustomIcon.jsx";
import "./Skills.css";

// Skills organized by category for maintainable structure
const LANGUAGES = [
    { icon: "javascript", title: "JavaScript" },
    { icon: "typescript", title: "TypeScript" },
    { icon: "python", title: "Python" },
    { icon: "java", title: "Java" },
    { icon: "rust", title: "Rust" },
    { icon: "html5", title: "HTML" },
    { icon: "css3", title: "CSS" },
    { icon: "sass", title: "SASS" },
    { icon: "sql", title: "SQL" },
];

const FRAMEWORKS = [
    { icon: "react", title: "React" },
    { icon: "react", title: "React Native" },
    { icon: "vue", title: "Vue" },
    { icon: "nodejs", title: "Node.js" },
    { icon: "flask", title: "Flask" },
    { icon: "django", title: "Django" },
    { icon: "tailwindcss", title: "Tailwind CSS" },
];

const TOOLS = [
    { icon: "supabase", title: "Supabase" },
    { icon: "mysql", title: "MySQL" },
    { icon: "postgresql", title: "PostgreSQL" },
    { icon: "mongodb", title: "MongoDB" },
    { icon: "docker", title: "Docker" },
    { icon: "git", title: "Git" },
    { icon: "github", title: "GitHub" },
];

const Skills = () => {
    const renderSkillItems = (items) => (
        <div className="items">
            {items.map((item, index) => (
                <div className="item" key={index}>
                    <CustomIcon icon={item.icon} /> {item.title}
                </div>
            ))}
        </div>
    );

    return (
        <div className="skills">
            <h2>Skills</h2>
            {renderSkillItems(LANGUAGES)}
            {renderSkillItems(FRAMEWORKS)}
            {renderSkillItems(TOOLS)}
        </div>
    );
};


export default Skills;
