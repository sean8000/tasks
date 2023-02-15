import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 className="App-header1">This is my new header for task 3</h1>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <img
                src="https://www.rd.com/wp-content/uploads/2018/02/30_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_124167640_YamabikaY.jpg?fit=700,467"
                alt="A picture of a cute puppy"
            />
            <p> Unordered list</p>
            <ul>
                <li> one </li>
                <li> two </li>
                <li> three </li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        Col1
                        <div id="rectangle"> </div>
                    </Col>

                    <Col>
                        Col2
                        <div id="rectangle"> </div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Sean Johnson</p>
            <p> Hello World </p>
        </div>
    );
}

export default App;
