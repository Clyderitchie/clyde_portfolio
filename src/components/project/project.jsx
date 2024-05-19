import React from "react";
import { Link } from "react-router-dom";

import './project.css';

function ProjectPreview() {

    return (
        <>
            <div id='projectContainer' className="container">
                <div id='projectRow' className="row">
                    <div id='projectSection1'>
                        <div id='project1' className="col-4">
                            <img src="https://placehold.co/500x300" alt="placeholder" />
                            <h4>Social Network</h4>
                            <p>Another Social Media clone</p>
                        </div>
                        <div id='project2'>
                            <img src="https://placehold.co/500x300" alt="Placeholder" />
                            <h4>FizzBuzz</h4>
                            <p>A new take on the classic</p>
                        </div>
                    </div>
                    <div id='projectSection2'>
                        <div id='project3'>
                            <img src="https://placehold.co/500x300" alt="placeholder" />
                            <h4>Calculator</h4>
                            <p>We can all use some math help</p>
                        </div>
                        <div id='project4'>
                        <img src="https://placehold.co/500x300" alt="placeholder" />
                            <h4>Project</h4>
                            <p>Another project</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProjectPreview;