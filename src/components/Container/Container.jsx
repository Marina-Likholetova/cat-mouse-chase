import React, { Component } from "react";
import { CURSOR_SIZE } from "../../utils/constants/constants";


export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coords: {
                x: 0,
                y: 0,
            },
        };
    }

    onMouseMove = (e) => {
        this.setState({
            coords: {
                x: e.clientX,
                y: e.clientY,
            },
        });
    };

    componentDidMount() {
        document.addEventListener("mousemove", this.onMouseMove);
    }

    componentWillUnmount() {
        document.removeEventListener("mousemove", this.onMouseMove);
    }

    render() {
        const { children, logo } = this.props;
        const { coords } = this.state;
        return (
            <>
                {children(coords)}
                <div
                    className="main-cursor"
                    style={{ left: coords.x - CURSOR_SIZE / 2, top: coords.y - CURSOR_SIZE /2 }}
                >
                    <img src={logo} alt="mouse" />
                </div>
            </>
        );
    }
}
