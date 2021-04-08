import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

interface HomeProps {
    logOut(): void;

    posts: Array<Object>
}

interface Object {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Home: React.FC<HomeProps> = ({logOut, posts}) => {
    let [search, setSearch] = useState<string>("")
    let [delayed, setDelayed] = useState<Array<Object>>([])
    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    const filtered = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase()));
    useEffect(() => {
        const interval = setInterval(() => {
            setDelayed(arr => [...arr, filtered[delayed.length]])
        }, 1000);
        return () => clearInterval(interval)
    }, []);


    return (
        <section className="Home">
            <div className="helpers">
                <button onClick={logOut}>Log Out</button>
                <input type="text" value={search} onChange={changeHandler}/>
            </div>
            <div className="post__container">
                {delayed.map(el =>
                    <div className="post" key={el.id}>
                        <h2>{el.userId}</h2>
                        <Link to={`/${el.id}`}>{el.title}</Link>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Home
