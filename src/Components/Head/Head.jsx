// External Libraries
import {Button, Link} from "@mui/material";

// Internal Assets
import { CustomIcon } from "@/Components/CustomIcon/CustomIcon.jsx";

// Stylesheets
import "./Head.css";


const Head = () => {
    return (
        <div className="head">
            <div className="main">
                <div className="head-links">
                    <Button
                        className="btn"
                        size="small"
                        component="a"
                        href="mailto:prestonefox4444@gmail.com"
                        title="prestonefox4444@gmail.com"
                    >
                        <CustomIcon size={ 25 } icon="email" />
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
                        <CustomIcon size={ 25 } icon="github" />
                    </Button>
                    <Button
                        className="btn"
                    >
                        <Link
                            className="item"
                            href="/resume.pdf"
                            title="Download Resume"
                            underline="hover"
                            download
                        >
                            <CustomIcon size={ 25 } icon="resume" />
                        </Link>
                    </Button>
                </div>
                <h1>Preston Fox</h1>
                <h4><CustomIcon size={ 30 } icon="location" />&nbsp;Indiana, Pennsylvania, US</h4>
            </div>
            <h3>Software Engineer &<br />Full Stack Developer</h3>
        </div>
    )
}


export default Head;