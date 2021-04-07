import React, {useState} from 'react';
import {Login} from "./components/Login";
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    let [display, setDisplay] = useState<number>(0)
    const logOut = () => {
        setDisplay(0);
        sessionStorage.clear()
    }
    if (sessionStorage.length > 0 || display === 1) {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={() => <Home logOut={logOut}/>}/>
                    </Switch>
                </Router>
            </div>
        )
    } else {
        return (
            <Login onSubmit={({username, password}) => {
                window.sessionStorage.setItem("username", username)
                setDisplay(1)
            }}/>
        )
    }
}

export default App;
