import React from "react";
import {Link} from "react-router-dom";

interface Object {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface Post {
    post: Object,
    names: string[]
}

const Detail: React.FC<Post> = ({post, names}) => {
    return (
        <section className="detail__container">
            <Link to="/">Go Back</Link>
            <h2>Details</h2>
            <div className="detail">
                <h2>User: {names[+post.userId - 1]}</h2>
                <h2>ID: {post.id}</h2>
                <h3>Title: {post.title}</h3>
                <p>Body: {post.body}</p>
            </div>
        </section>
    )
}

export default Detail
