import React from "react";

import './project.css';

import socialNetworkImg from "./SocialNetwork.png";
import fizzBuzzImg from "./theFizzBuzzGame.png";
import hazeImg from "./haze.png";

function ProjectPreview() {

    return (
        <>
            <div id='projectContainer' className="container">
                <div id='projectRow' className="row">
                    <div id='projectSection1'>
                        <div id='project1' className="col-4">
                            <a id='projectLink1' href='https://socialclone-3f5a244c5dc6.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                                <img id='projectPicHomepage1' src={socialNetworkImg} alt="Social Network screen shot" />
                                <span id='projectInfo1'>
                                    <h4>Social Network</h4>
                                    <p>Another Social Media clone</p>
                                </span>
                            </a>
                        </div>
                        <div id='project2'>
                            <a id='projectLink2' href="https://fizzbuzzbyclyde.netlify.app/" target='_blank'>
                                <img id='projectPicHomepage2' src={fizzBuzzImg} alt="Screen shot FizzBuzz game homepage." />
                                <span id='projectInfo2'>
                                    <h4>FizzBuzz</h4>
                                    <p>A new take on the classic</p>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div id='projectSection2'>
                        <div id='project3'>
                            <a id='projectLink3' href="https://haze-community-a1679c79f3fa.herokuapp.com/games/1" target='_blank'>
                                <img id='projectPicHomepage3'src={hazeImg} alt="Screen Shoot of Haze Homepage" />
                                <span id='projectInfo3'>
                                    <h4>Haze</h4>
                                    <p>A group project to redesign a basic Steam site.</p>
                                </span>
                            </a>
                        </div>
                        {/* <div id='project4'>
                            <a id='projectLink4' href="/" target='_blank'>
                                <img src="https://placehold.co/500x300" alt="placeholder" />
                                <span id='projectInfo4'>
                                    <h4>Project</h4>
                                    <p>Another project</p>
                                </span>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProjectPreview;