import React, { Component } from "react";
import mouse from "./assets/mouse.svg";
import "./App.css";
import imagePaths from "./utils/getImagePaths";
import getRandom from "./utils/getRandom";
import generateId from "./utils/generateId";
import getCirclePosition from "./utils/getCirclePosition";
import Container from "./components/Container/Container";
import Cat from "./components/Cat/Cat";



export default class App extends Component {
    constructor() {
        super();
        this.state = {
            cats: [],
        };
    }

    componentDidMount() {
      this.setState({
        cats: [...Array(getRandom(1, 10)).keys()].map((_, i) => ({
          img: imagePaths[getRandom(0, imagePaths.length - 1)],
          id: generateId(),
          delay: (i + 1) * 1000
        }))
      });
    }

    render() {
        const { cats } = this.state;
        const catsLength = cats.length;

        return (
            <div className="App">
                <Container logo={mouse}>
                    {(coords) => (
                        <>
                            {cats?.map((cat, i) => (
                                <Cat
                                    coords={getCirclePosition(coords, i, catsLength)}
                                    img={cat.img}
                                    delay={cat.delay}
                                    key={cat.id}
                                />
                            ))}
                        </>
                    )}
                </Container>
            </div>
        );
    }
}
