import React from "react";

import './welcome.css';

function Welcome() {

    return (
        <>
            <div id='welcomeContainer' className="container">
                <div className="row">
                    <div id='welcomeHero' className="col-12">
                        <h2>
                            Welcome
                        </h2>
                        <div id='aboutMe'>
                            <p>
                            Hello! I'm Clyde Ritchie, a passionate Junior Developer with a knack for crafting seamless web experiences. 
                            Proficient in modern web technologies, I excel in React, JavaScript, HTML5, and CSS, complemented by Bootstrap for responsive design. 
                            My back-end skills include working with MongoDB and GraphQL, ensuring efficient data handling and API integration. 
                            I'm also adept at using GitHub for version control and collaboration, and I leverage Figma for UX/UI design to create intuitive and engaging user interfaces. 
                            Driven by a love for coding and continuous learning, 
                            I'm eager to contribute to innovative projects and grow within the tech community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Welcome;