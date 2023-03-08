import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    const typeRecord: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question"
    };

    function changeType(): void {
        const newType = typeRecord[type];
        setType(newType);
    }

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {type === "short_answer_question" ? (
                <span> Short Answer </span>
            ) : (
                <span> Multiple Choice</span>
            )}
        </div>
    );
}
