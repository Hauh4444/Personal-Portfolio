import { Route, Routes } from "react-router-dom";
import Main from "@/pages/Main/Main.jsx";
import ProjectDetail from "@/pages/ProjectDetail/ProjectDetail.jsx";


const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
    );
};


export default PublicRoutes;
