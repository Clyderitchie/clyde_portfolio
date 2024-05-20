import React from "react";
import { Link } from "react-router-dom";

import './about.css';

function AboutMe() {

    return (
        <>
            <div id='aboutContainer' className="container">
                <div className="row">
                    <div id='aboutContent' className="col-12">
                        <div id='about1'>
                            <h2>About</h2>
                            <p id='about1Content'>
                                Clyde Ritchie is a junior software developer from Tacoma WA, with one year of coding experience, specializing in Full Stack development.
                                Proficient in technologies including React, MongooseDB, MySQL, Handlebars, JavaScript, CSS, Bootstrap, Material UI, MongoDB Atlas, and deployment platforms such as Heroku.
                                With a strong foundation in HTML5, Java, and Python, Clyde is passionate about creating efficient and user-friendly software solutions.
                                Active on GitHub, Clyde Ritchie is committed to continuous learning and contributing to the development community.
                            </p>
                        </div>
                        <div id='about2'>
                            <img id='aboutPic' src="src/assets/picOfMe.jpg" alt="Picture of me" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutMe;