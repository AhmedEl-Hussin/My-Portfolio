// import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar.jsx";
import Home from "../../Home/Home.jsx";
import About from "../../About/About.jsx";
import Skills from "../../Skills/Skills.jsx";
import Projects from "../../Projects/Projects.jsx";
import Contact from "../../Contact/Contact.jsx";

export default function MasterLayout() {
    
    return (
        <>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    )
}
