import React from "react";
import NavButton from "./NavButton";

function navBar () {

    return(
        <div class="flex justify-evenly bg-red-50">
            <NavButton path="/" input={"BibliOnline"}/>
            <NavButton path="/collection" input={"Collection"}/>
            <NavButton path="/categories" input={"Categories"}/>
        </div>
    );
}

export default navBar;