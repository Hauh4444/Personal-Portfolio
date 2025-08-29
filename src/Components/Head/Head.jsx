// External Libraries
import { Button } from "@mui/material";

// External Icons
import { IoMail } from "react-icons/io5";
import { FaGithub, FaMapPin } from "react-icons/fa";

// Stylesheets
import "./Head.css";


const Head = ({ ref }) => {
    return (
        <div className="head" ref={ ref }>
            <div className="main">
                <div className="links">
                    <Button
                        className="btn"
                        size="small"
                        component="a"
                        href="mailto:prestonefox4444@gmail.com"
                        title="prestonefox4444@gmail.com"
                    >
                        <IoMail />
                    </Button>
                    <Button
                        className="btn"
                        size="small"
                        component="a"
                        href="https://github.com/Hauh4444"
                        title="https://github.com/Hauh4444"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </Button>
                </div>
                <h1>Preston Fox</h1>
                <h4><FaMapPin />&nbsp;Indiana, Pennsylvania, US</h4>
            </div>
            <h3>Full Stack Developer</h3>
        </div>
    )
}


export default Head;