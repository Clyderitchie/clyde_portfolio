import React from "react";

import Nav from "../components/nav/nav";
import Welcome from "../components/welcome/welcome";
import ProjectPreview from '../components/project/project';

function Home() {
    return (
        <>
        <Nav />
        <Welcome />
        <ProjectPreview />
        <h1>Hello</h1>
        </>
    )
};

export default Home;