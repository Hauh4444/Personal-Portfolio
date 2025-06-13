// External Libraries
import { Link } from "@mui/material";

// External Icons
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";

// Stylesheets
import "./Links.css";


const Links = () => {
    return (
        <>
            <h2>Links</h2>
            <div className="links">
                <Link
                    className="item"
                    href="mailto:prestonefox4444@gmail.com"
                    title="prestonefox4444@gmail.com"
                    underline="hover"
                    target="_blank"
                    rel="noopener"
                >
                    <IoMail sx={{ mr: 1 }} />Email Me
                </Link>

                <Link
                    className="item"
                    href="https://github.com/Hauh4444"
                    title="https://github.com/Hauh4444"
                    underline="hover"
                    target="_blank"
                    rel="noopener"
                >
                    <FaGithub sx={{ mr: 1 }} />GitHub
                </Link>

                <Link
                    className="item"
                    href="/resume.pdf"
                    title="Preston's Resume"
                    underline="hover"
                    download
                >
                    <MdOutlineDescription sx={{ mr: 1 }} />Download Resume
                </Link>
            </div>
        </>
    )
}


export default Links;