import React from "react";

import './project.css';

function ProjectPreview() {

    return (
        <>
            <div id='projectContainer' className="container">
                <div id='projectRow' className="row">
                    <div id='projectSection1'>
                        <div id='project1' className="col-4">
                            <a id='projectLink1' href='https://socialclone-3f5a244c5dc6.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                                <img id='projectPicHomepage1' src="src/assets/SocialNetwork.png"alt="Social Network screen shot" />
                                <span id='projectInfo1'>
                                    <h4>Social Network</h4>
                                    <p>Another Social Media clone</p>
                                </span>
                            </a>
                        </div>
                        <div id='project2'>
                            <a id='projectLink2' href="https://fizzbuzzbyclyde.netlify.app/" target='_blank'>
                                <img id='projectPicHomepage2' src="src/assets/theFizzBuzzGame.png" alt="Screen shot FizzBuzz game homepage." />
                                <span id='projectInfo2'>
                                    <h4>FizzBuzz</h4>
                                    <p>A new take on the classic</p>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div id='projectSection2'>
                        <div id='project3'>
                            <a id='projectLink3' href="/" target='_blank'>
                                <img src="https://placehold.co/500x300" alt="placeholder" />
                                <span id='projectInfo3'>
                                    <h4>Calculator</h4>
                                    <p>We can all use some math help</p>
                                </span>
                            </a>
                        </div>
                        <div id='project4'>
                            <a id='projectLink4' href="/" target='_blank'>
                                <img src="https://placehold.co/500x300" alt="placeholder" />
                                <span id='projectInfo4'>
                                    <h4>Project</h4>
                                    <p>Another project</p>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProjectPreview;