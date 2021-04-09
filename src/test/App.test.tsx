import * as ReactDOM from "react-dom"
import App from "../App";
describe('App component test', () => {
    it ("Renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App/>, div)
        expect(div.childElementCount).toBe(1)
        ReactDOM.unmountComponentAtNode(div);
    })
});