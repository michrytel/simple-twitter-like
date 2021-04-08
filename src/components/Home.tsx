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
    useEffect(() => {
        let helper = 0;
        const interval = setInterval(() => {
            setDelayed(arr => [...arr, posts[helper]])
            helper++;
            if (helper === 100) clearInterval(interval)
        }, 1000);
        return () => clearInterval(interval)
    }, []);
    const names: string[] = ["Michael", "Kate", "Philip", "Tony", "Casper", "John", "Perry", "Marc", "Suzanne", "Marlene"]

    if (posts[0]) {
        const filtered = delayed.filter(post => post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase()))
        return (
            <section className="home">
                <div className="helpers">
                    <button onClick={logOut}>Log Out</button>
                    <input type="text" value={search} onChange={changeHandler} placeholder="search"/>
                </div>
                <div className="post__container">
                    {filtered.map(el =>
                        <div className="post" key={el.id}>
                            <h2>User: {names[+el.userId - 1]}</h2>
                            <Link to={`/${el.id}`}>Title: {el.title}</Link>
                        </div>
                    )}
                </div>
            </section>
        )
    } else {
        return null
    }
}


export default Home
