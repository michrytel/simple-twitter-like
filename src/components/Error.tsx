import React from "react";


const Error = () => {
    if (navigator.onLine) {
        return null
    } else {
        return (
            <div className="error__wrapper">
                <h1>Sorry, check your internet connection and refresh page</h1>
            </div>
        )
    }
}
export default Error