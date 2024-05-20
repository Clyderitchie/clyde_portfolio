import React from "react";

import Nav from "../components/nav/nav";
import Welcome from "../components/welcome/welcome";
import ProjectPreview from '../components/project/project';
import Footer from "../components/footer/footer";

function Home() {
    return (
        <>
        <Nav />
        <Welcome />
        <ProjectPreview />
        <Footer/>
        </>
    )
};

export default Home;