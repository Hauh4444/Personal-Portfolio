// External Libraries
import { Route, Routes } from "react-router-dom";

// Internal Modules
import Main from "@/Pages/Main/Main.jsx";


const PublicRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={ <Main /> } />
        </Routes>
    )
};


export default PublicRoutes;
