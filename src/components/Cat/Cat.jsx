import React, { Component } from "react";
import { MAX_HEIGHT, MAX_WIDTH, ITEM_SIZE } from "../../utils/constants/constants";
import getRandom from "../../utils/getRandom";

export default class Cat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: getRandom(0, MAX_WIDTH - ITEM_SIZE),
            y: getRandom(0, MAX_HEIGHT - ITEM_SIZE),
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ x: null, y: null });
        }, this.props.delay);
    }

    render() {
        const { x, y } = this.state;
        const { coords, img } = this.props;

        return (
            <div className="item" style={{ left: `${x || coords.x}px`, top: `${y || coords.y}px` }}>
                <img src={require("../../assets/icons/" + img)} className="item-image" alt="cat" />
            </div>
        );
    }
}
