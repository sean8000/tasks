import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<number>(0);

    function useAttempts() {
        setNumAttempts(numAttempts - 1);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Button onClick={useAttempts} disabled={numAttempts === 0}>
                use
            </Button>
            <span> You have {numAttempts} attempts remaining</span>
            <Form.Group controlId="giveAttempts">
                <Form.Label>Add Attempts using numberInputBox:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestAttempts(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setNumAttempts(numAttempts + requestAttempts)}
            >
                gain
            </Button>
        </div>
    );
}
