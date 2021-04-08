import React, {useState} from "react";


const Error = () => {
    const [connection, setConnection] = useState<boolean>(true)
    const isOnline = require('is-online');
    (async () => {
        setConnection(await isOnline());
    })();
    if (connection) {
        return null
    } else {
        return (
            <div className="error__wrapper">
                <h1>Sorry, check your internet conneccion and try again</h1>
            </div>
        )
    }
}
export default Error