import React from "react";
import { Link } from "react-router-dom";

import './nav.css'

function Nav() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div id='navLayout' className="col-12">
                        <h1 id='navMe'>
                            Clyde Ritchie
                        </h1>
                        <div id='navLinks'>
                            <Link id='nav1' to='/'>
                                <h3>
                                    Projects
                                </h3>
                            </Link>
                            <Link id='nav2' to='/'>
                                <h3>
                                    About
                                </h3>
                            </Link>
                            <Link id='nav3' to='/'>
                                <h3>
                                    Contact
                                </h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Nav;