import { Answer } from "./interfaces/answer";
import { makeBlankQuestion, duplicateQuestion } from "./objects";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const questionsCopy = questions.filter(
        (question: Question): boolean => question.published
    );
    return questionsCopy;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const questionsCopy = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length > 0
    );
    return questionsCopy;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    // eslint-disable-next-line prettier/prettier
    questions: Question[],
    id: number
): Question | null {
    const foundQuestion = questions.find(
        (question: Question): boolean => question.id === id
    );
    if (foundQuestion === undefined) {
        return null;
    } else {
        return foundQuestion;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const questionsCopy = questions.filter(
        (question: Question): boolean => question.id !== id
    );
    return questionsCopy;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const questionsCopy = questions.map(
        (question: Question): string => question.name
    );
    return questionsCopy;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (currentTotal: number, question: Question) =>
            currentTotal + question.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedQuestions = getPublishedQuestions(questions);
    const sum = sumPoints(publishedQuestions);
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const out = "id,name,options,points,published\n";
    const questionCSV = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    return out + questionCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (question: Question): Answer =>
            // eslint-disable-next-line prettier/prettier
            ({
                questionId: question.id,
                text: "",
                submitted: false,
                correct: false
            })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const questionsCopy = questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );
    return questionsCopy;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const questionsCopy1 = questions.filter(
        (question: Question): boolean =>
            question.type === "multiple_choice_question"
    );
    const questionsCopy2 = questions.filter(
        (question: Question): boolean =>
            question.type === "short_answer_question"
    );
    if (questionsCopy1.length === 0 || questionsCopy2.length === 0) {
        return true;
    } else {
        return false;
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */

export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const questionsCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const newQuestion = makeBlankQuestion(id, name, type);
    questionsCopy.push(newQuestion);
    return questionsCopy;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const questionsCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const foundElement = questions.find(
        (question: Question): boolean => question.id === targetId
    );
    const foundIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );

    if (foundElement === undefined || foundIndex === -1) {
        return questionsCopy;
    } else {
        const newQuestion = { ...foundElement, name: newName };
        questionsCopy.splice(foundIndex, 1, newQuestion);
        return questionsCopy;
    }
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const questionsCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const foundElement = questions.find(
        (question: Question): boolean => question.id === targetId
    );
    const foundIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );

    if (foundElement === undefined || foundIndex === -1) {
        return questionsCopy;
    } else {
        const oldQuestionType = foundElement.type;
        if (oldQuestionType === "multiple_choice_question") {
            const newQuestion1 = {
                ...foundElement,
                type: newQuestionType,
                options: []
            };
            questionsCopy.splice(foundIndex, 1, newQuestion1);
        } else {
            const newQuestion2 = { ...foundElement, type: newQuestionType };
            questionsCopy.splice(foundIndex, 1, newQuestion2);
        }
        return questionsCopy;
    }
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const questionsCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const foundElement = questions.find(
        (question: Question): boolean => question.id === targetId
    );
    const foundIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );

    if (foundElement === undefined || foundIndex === -1) {
        return questionsCopy;
    } else {
        if (targetOptionIndex === -1) {
            const newQuestion1 = {
                ...foundElement,
                options: [...foundElement.options, newOption]
            };
            questionsCopy.splice(foundIndex, 1, newQuestion1);
        } else {
            const newQuestion2 = {
                ...foundElement,
                options: [...foundElement.options]
            };
            newQuestion2.options.splice(targetOptionIndex, 1, newOption);
            questionsCopy.splice(foundIndex, 1, newQuestion2);
        }
        return questionsCopy;
    }
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const questionsCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const foundElement = questions.find(
        (question: Question): boolean => question.id === targetId
    );
    const foundIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );

    if (foundElement === undefined || foundIndex === -1) {
        return questionsCopy;
    } else {
        const newQuestion = duplicateQuestion(newId, foundElement);
        questionsCopy.splice(foundIndex + 1, 0, newQuestion);
        return questionsCopy;
    }
}
