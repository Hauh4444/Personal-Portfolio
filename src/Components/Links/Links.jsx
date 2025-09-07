// External Libraries
import { Link } from "@mui/material";

// Internal Assets
import { CustomIcon } from "@/Components/CustomIcon/CustomIcon.jsx";

// Stylesheets
import "./Links.css";


const Links = () => {
    return (
        <div className="links">
            <h2>Links</h2>
            <Link
                className="item"
                href="mailto:prestonefox4444@gmail.com"
                title="prestonefox4444@gmail.com"
                underline="hover"
                target="_blank"
                rel="noopener"
            >
                <CustomIcon size={ 20 } icon="email" /> Email Me
            </Link>

            <Link
                className="item"
                href="https://github.com/Hauh4444"
                title="https://github.com/Hauh4444"
                underline="hover"
                target="_blank"
                rel="noopener"
            >
                <CustomIcon size={ 20 } icon="github" /> GitHub
            </Link>

            <Link
                className="item"
                href="/resume.pdf"
                title="Preston's Resume"
                underline="hover"
                download
            >
                <CustomIcon size={ 20 } icon="resume" /> Download Resume
            </Link>
        </div>
    )
}


export default Links;