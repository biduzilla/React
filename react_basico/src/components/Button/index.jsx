import { Component } from "react";
import "./styles.css";

export class Button extends Component {

    render() {
        const { text, onClick, disable } = this.props;
        return (
            <button classname="button" onClick={onClick} disable={disable}>{text}</button>
        );
    }

}