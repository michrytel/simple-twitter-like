import * as ReactDOM from "react-dom";
import PageNotFount from "../components/PageNotFound";
import {BrowserRouter} from "react-router-dom";

describe('PageNotFound component test', () => {
    let container: HTMLDivElement
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <BrowserRouter><PageNotFount/></BrowserRouter>, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })
    it ("Renders correctly Detail component", () => {
        const info = container.querySelector("#info");
        expect(info).toBeInTheDocument();
    })
})