// External Libraries
import { Button } from "@mui/material";

// Stylesheets
import "./NavBar.css";


const NavBar = ({ headRef, aboutRef, projectsRef, educationRef, linksRef }) => {
    const navItems = [
        { title: "Home", ref: headRef },
        { title: "About", ref: aboutRef },
        { title: "Projects", ref: projectsRef },
        { title: "Education", ref: educationRef },
        { title: "Links", ref: linksRef },
    ];


    const handleScroll = (ref) => {
        const yOffset = -75;
        const element = ref.current;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }


    return (
        <div className="navBar">
            { navItems.map((item, index) => (
                <Button
                    className="btn"
                    key={ index }
                    size="small"
                    onClick={ () => handleScroll(item.ref) }
                >
                    { item.title }
                </Button>
            )) }
        </div>
    )
}


export default NavBar;