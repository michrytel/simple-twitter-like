import React from "react";

interface HomeProps {
    logOut(): void;
}

const Home:React.FC<HomeProps> = ({logOut}) => {
    return (
        <>
            <button onClick={logOut}>Log Out</button>
            <div>LALA</div>
        </>
    )
}

export default Home