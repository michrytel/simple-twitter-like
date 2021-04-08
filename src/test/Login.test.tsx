import {Login} from "../components/Login"
import * as ReactDOM from "react-dom"
describe('Login component test', () => {
    let container: HTMLDivElement
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Login onSubmit={({username, password}) => {
            window.sessionStorage.setItem("username", username)
            window.location.reload()
        }}/>, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })
    it ("Renders correctly initial document", () => {
        const inputs = container.querySelectorAll("input");
        expect(inputs).toHaveLength(2);
        expect(inputs[0].name).toBe("username");
        expect(inputs[1].name).toBe("password");
        const button = container.querySelector("button");
        expect(button).toBeInTheDocument();

    })
});