import React, { useState } from "react";
import "../App.css";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("white");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="response"
                    onChange={updateColor}
                    id="response-good"
                    label="white"
                    value="white"
                    checked={color === "white"}
                />

                <Form.Check
                    inline
                    type="radio"
                    name="response"
                    onChange={updateColor}
                    id="response-good"
                    label="black"
                    value="black"
                    checked={color === "black"}
                />

                <Form.Check
                    inline
                    type="radio"
                    name="response"
                    onChange={updateColor}
                    id="response-good"
                    label="blue"
                    value="blue"
                    checked={color === "blue"}
                />

                <Form.Check
                    inline
                    type="radio"
                    name="response"
                    onChange={updateColor}
                    id="response-good"
                    label="red"
                    value="red"
                    checked={color === "red"}
                />

                <Form.Check
                    inline
                    type="radio"
                    name="response"
                    onChange={updateColor}
                    id="response-good"
                    label="green"
                    value="green"
                    checked={color === "green"}
                />

                <Form.Check
                    inline
                    type="radio"
                    name="response"
                    onChange={updateColor}
                    id="response-good"
                    label="orange"
                    value="orange"
                    checked={color === "orange"}
                />

                <Form.Check
                    inline
                    type="radio"
                    name="response"
                    onChange={updateColor}
                    id="response-good"
                    label="purple"
                    value="purple"
                    checked={color === "purple"}
                />

                <Form.Check
                    inline
                    type="radio"
                    name="response"
                    onChange={updateColor}
                    id="response-good"
                    label="yellow"
                    value="yellow"
                    checked={color === "yellow"}
                />
            </div>
            <div>
                <br></br>
                <span
                    style={{
                        background: color
                    }}
                    data-testid="colored-box"
                >
                    Your current color is: {color}
                </span>
            </div>
        </div>
    );
}
