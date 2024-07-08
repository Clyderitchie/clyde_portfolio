import React from "react";

import './projects.css';

import socialNetwork from '../../components/project/SocialNetwork.png';
import fizzBuzz from '../../components/project/theFizzBuzzGame.png';
import haze from '../../components/project/haze.png';

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
                                <img id='projectPic1' src={socialNetwork} alt="Social Network screen shot" />
                                <span id='projectInfo1'>
                                    <h4>Social Network</h4>
                                    <p>Another Social Media clone</p>
                                </span>
                            </a>
                        </div>
                        <div id='projectPage2'>
                            <a id='projectPageLink2' href="https://fizzbuzzbyclyde.netlify.app/" target='_blank'>
                                <img id='projectPic2' src={fizzBuzz} alt="Screen shot FizzBuzz game homepage." />
                                <span id='projectInfo2'>
                                    <h4>FizzBuzz</h4>
                                    <p>A new take on the classic</p>
                                </span>
                            </a>
                        </div>
                        <div id='projectPage3'>
                            <a id='projectPageLink3' href="https://haze-community-a1679c79f3fa.herokuapp.com/games/1" target='_blank'>
                                <img id='projectPic3' src={haze} alt="Screen shot of Haze Homepage" />
                                <span id='projectInfo3'>
                                    <h4>Haze</h4>
                                    <p>A group project to redesign a basic Steam site. </p>
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