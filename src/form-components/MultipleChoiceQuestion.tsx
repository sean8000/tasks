import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currentChoice, setCurrentChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentChoice(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="favoriteColors">
                <Form.Label>What is your favorite color?</Form.Label>
                <Form.Select value={currentChoice} onChange={updateChoice}>
                    {options.map((op: string) => (
                        <option key={op} value={op}>
                            {op}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            The current option selected is {currentChoice}
            {currentChoice === expectedAnswer ? (
                <span> ✔️ </span>
            ) : (
                <span> ❌ </span>
            )}
        </div>
    );
}
