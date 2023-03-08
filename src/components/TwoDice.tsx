import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(0);
    const [rightDie, setRightDie] = useState<number>(1);

    function rollLeft(d6: number): void {
        setLeftDie(d6);
    }
    function rollRight(d6: number): void {
        setRightDie(d6);
    }

    return (
        <div>
            <Button onClick={() => rollLeft(d6())}>Roll Left</Button>
            <Button onClick={() => rollRight(d6())}>Roll Right</Button>

            <span data-testid="left-die"> Left Die: {leftDie} </span>
            <span data-testid="right-die"> Right Die: {rightDie} </span>

            {leftDie === rightDie && leftDie !== 1 ? (
                <span> You Win</span>
            ) : leftDie === rightDie && leftDie === 1 ? (
                <span> You Lose </span>
            ) : (
                <span> Not Equal </span>
            )}
        </div>
    );
}
