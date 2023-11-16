import React from "react";
import { Link } from "react-router-dom";

function NavButton ({path, input}) {

    return(
        <div class="p-3 font-test" classname="navbutton">
            <Link to={path}>
                <p > {input} </p>
            </Link>
        </div>
    );
}

export default NavButton;