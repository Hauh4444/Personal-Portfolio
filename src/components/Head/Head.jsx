import { Button, Link } from "@mui/material";
import { CustomIcon } from "@/components/CustomIcon/CustomIcon.jsx";
import "./Head.css";

const CONTACT_LINKS = [
    { icon: "email", href: "mailto:prestonefox4444@gmail.com", title: "Email" },
    { icon: "github", href: "https://github.com/Hauh4444", title: "GitHub", external: true },
    { icon: "linkedin", href: "https://www.linkedin.com/in/preston-fox-3024a82b8/", title: "LinkedIn", external: true },
];

const Head = () => {
    return (
        <div className="head">
            <div className="main">
                <div className="head-links">
                    {CONTACT_LINKS.map((link, index) => (
                        <Button
                            key={index}
                            className="btn"
                            size="small"
                            component="a"
                            href={link.href}
                            title={link.title}
                            {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                        >
                            <CustomIcon size={25} icon={link.icon} />
                        </Button>
                    ))}
                    <Button className="btn">
                        <Link
                            className="item"
                            href="/resume.pdf"
                            title="Download Resume"
                            underline="hover"
                            download
                        >
                            <CustomIcon size={25} icon="resume" />
                        </Link>
                    </Button>
                </div>
                <h1>Preston Fox</h1>
                <h4>
                    <CustomIcon size={30} icon="location" />&nbsp;Indiana, Pennsylvania, US
                </h4>
            </div>
            <h3>
                Software Engineer &<br />Full Stack Developer
            </h3>
        </div>
    );
};


export default Head;
