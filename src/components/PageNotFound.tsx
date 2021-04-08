import React from 'react'
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <div id="wrapper">
            <img src="https://i.imgur.com/qIufhof.png" alt="error 404"/>
            <div id="info">
                <h3>This page could not be found</h3>
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}

export default PageNotFound