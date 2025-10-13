import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { IoArrowBack } from "react-icons/io5";
import ProjectDetailHeader from "@/components/ProjectDetailHeader/ProjectDetailHeader.jsx";
import HeroSection from "@/components/HeroSection/HeroSection.jsx";
import OverviewSection from "@/components/OverviewSection/OverviewSection.jsx";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection.jsx";
import TechnicalStackSection from "@/components/TechnicalStackSection/TechnicalStackSection.jsx";
import TechnicalHighlightsSection from "@/components/TechnicalHighlightsSection/TechnicalHighlightsSection.jsx";
import ChallengesSection from "@/components/ChallengesSection/ChallengesSection.jsx";
import TagsSection from "@/components/TagsSection/TagsSection.jsx";
import { projectsData } from "@/data/projectsData.js";
import "./ProjectDetail.css";


const ProjectDetail = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === projectId);

    // Reset scroll position on navigation to prevent maintaining scroll state from previous page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) {
        return (
            <div className="project-detail-container">
                <div className="not-found">
                    <h2>Project Not Found</h2>
                    <Button 
                        variant="contained" 
                        onClick={() => navigate('/')}
                        startIcon={<IoArrowBack />}
                    >
                        Back to Home
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="project-detail-container">
            <ProjectDetailHeader 
                title={project.title} 
                onBack={() => navigate('/')} 
            />

            <div className="project-detail-content">
                <HeroSection project={project} />
                <OverviewSection 
                    overview={project.overview} 
                    context={project.context} 
                />
                <FeaturesSection features={project.features} />
                <TechnicalStackSection technicalStack={project.technicalStack} />
                <TechnicalHighlightsSection highlights={project.technicalHighlights} />
                <ChallengesSection challenges={project.challenges} />
                <TagsSection tags={project.tags} />
            </div>
        </div>
    );
};


export default ProjectDetail;
