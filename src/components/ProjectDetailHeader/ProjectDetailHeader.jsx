import { Button } from "@mui/material";
import { IoArrowBack } from "react-icons/io5";
import "./ProjectDetailHeader.css";


const ProjectDetailHeader = ({ title, onBack }) => {
    return (
        <div className="project-detail-header">
            <div className="header-content">
                <div className="header-left">
                    <h2 className="project-title-nav">{title}</h2>
                </div>
                <div className="header-right">
                    <Button 
                        className="back-button"
                        onClick={onBack}
                        startIcon={<IoArrowBack />}
                    >
                        Back to Portfolio
                    </Button>
                </div>
            </div>
        </div>
    );
};


export default ProjectDetailHeader;
