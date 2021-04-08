import React from "react";
import {Link} from "react-router-dom";

interface Object {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface Post {
    post: Object
}

const Detail: React.FC<Post> = ({post}) => {
    const names: string[] = ["Michael", "Kate", "Philip", "Tony", "Casper"]
    return (
        <section className="detail__container">
            <Link to="/">Go Back</Link>
            <h2>Detais</h2>
            <div className="detail">
                <h2>UserID: {names[post.userId]}</h2>
                <h2>ID: {post.id}</h2>
                <h2>Title: {post.title}</h2>
                <p>Body: {post.body}</p>
            </div>
        </section>
    )
}

export default Detail
