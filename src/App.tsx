import React, {useEffect, useState} from 'react';
import {Login} from "./components/Login";
import Home from "./components/Home";
import Detail from "./components/Detail";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios, {AxiosResponse} from "axios";

interface Object {
    userId: number,
    id: number,
    title: string,
    body: string
}

function App() {
    let [posts, setPosts] = useState<Array<Object>>([])
    useEffect(() => {
        getPosts()
    }, [])
    const getPosts = () => {
        const url = "https://jsonplaceholder.typicode.com/posts"
         axios.get(url).then((response: AxiosResponse) => {
            response.data.reverse()
            setPosts(response.data);
        }).catch((error) => {
            console.log("error", error);
        })
    }
    const logOut = () => {
        sessionStorage.clear()
        window.location.reload()
    }

    if (sessionStorage.length ) {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={() => <Home logOut={logOut} posts={posts}/>}/>
                    </Switch>
                    {posts.map(el => <Switch key={el.id}>
                        <Route exact path={`/${el.id}`} component={() => <Detail post={el}/>}/>
                    </Switch>)}
                </Router>
            </div>
        )
    } else {
        return (
            <Login onSubmit={({username, password}) => {
                window.sessionStorage.setItem("username", username)
                window.location.reload()
            }}/>
        )
    }
}

export default App;
