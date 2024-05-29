import React from "react";

import './projects.css';

function ProjectsPage() {

    return (
        <>
            <div id='projectOutsideContainer' className="container">
                <div className="row">
                    <div id='ProjectPageTitle'>
                        <h2>
                            My Projects
                        </h2>
                    </div>
                    <div id='projectContent1' className="col-12">
                        <div id='projectPage1' className="col-4">
                            <a id='projectPageLink1' href='https://socialclone-3f5a244c5dc6.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                                <img id='projectPic1' src="src/assets/SocialNetwork.png" alt="Social Network screen shot" />
                                <span id='projectInfo1'>
                                    <h4>Social Network</h4>
                                    <p>Another Social Media clone</p>
                                </span>
                            </a>
                        </div>
                        <div id='projectPage2'>
                            <a id='projectPageLink2' href="https://fizzbuzzbyclyde.netlify.app/" target='_blank'>
                                <img id='projectPic2' src="src/assets/theFizzBuzzGame.png" alt="Screen shot FizzBuzz game homepage." />
                                <span id='projectInfo2'>
                                    <h4>FizzBuzz</h4>
                                    <p>A new take on the classic</p>
                                </span>
                            </a>
                        </div>
                        <div id='projectPage3'>
                            <a id='projectPageLink3' href="/" target='_blank'>
                                <img src="https://placehold.co/500x300" alt="placeholder" />
                                <span id='projectInfo3'>
                                    <h4>Calculator</h4>
                                    <p>We can all use some math help</p>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProjectsPage;