import * as ReactDOM from "react-dom"
import Home from "../components/Home";
import '@testing-library/jest-dom'
const logOut = () => {
    sessionStorage.clear()
    window.location.reload()
}
const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    }
]
const names = ["Michael", "Kate", "Philip", "Tony", "Casper", "John", "Perry", "Marc", "Suzanne", "Marlene"]

describe('Home component test', () => {
    let container: HTMLDivElement
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Home logOut={logOut} posts={posts} names={names}/>, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })
    it ("Renders correctly Home component", () => {
        const input = container.querySelector("input");
        expect(input).toBeInTheDocument();
        const button = container.querySelector("button");
        expect(button).toBeInTheDocument();
        const home = container.querySelector(".home");
        expect(home).toBeInTheDocument()
    })
});