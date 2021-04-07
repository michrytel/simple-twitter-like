import React, {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {Link} from "react-router-dom";

interface HomeProps {
    logOut(): void;
}

interface Object {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Home: React.FC<HomeProps> = ({logOut}) => {
    let [search, setSearch] = useState<string>("")
    let [posts, setPosts] = useState<Array<Object>>([])
    let changeHandler = (e: React.FormEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)
    useEffect(() => {
        getPosts()
    }, [])
    const getPosts = () => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        axios.get(url).then((response: AxiosResponse<any>) => {
            setPosts(response.data);
        }).catch((error) => {
            console.log("error", error);
        })
    }
    const filtered = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase()));
    return (
        <section className="Home">
            <div className="helpers">
                <button onClick={logOut}>Log Out</button>
                <input type="text" value={search} onChange={changeHandler}/>
            </div>
            <div className="post__container">
                {filtered.map(el =>
                    <div className="post" key={el.id}>
                        <h2>{el.userId}</h2>
                        <Link to={`/${el.id}`}>{el.title}</Link>
                    </div>)}
            </div>
        </section>
    )
}

export default Home