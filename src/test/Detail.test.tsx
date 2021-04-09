import * as ReactDOM from "react-dom"
import Detail from "../components/Detail";
import {BrowserRouter} from "react-router-dom";

const posts =
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    }

const names = ["Michael", "Kate", "Philip", "Tony", "Casper", "John", "Perry", "Marc", "Suzanne", "Marlene"]

describe('Detail component test', () => {
    let container: HTMLDivElement
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <BrowserRouter><Detail post={posts} names={names}/></BrowserRouter>, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })
    it ("Renders correctly Detail component", () => {
        const title = container.querySelector("h2");
        expect(title).toBeInTheDocument();
        const button = container.querySelector("a");
        expect(button).toBeInTheDocument();
        const detailContainer = container.querySelector(".detail__container");
        expect(detailContainer).toBeInTheDocument()
    })
});