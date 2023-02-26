/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const numbersCopy = [...numbers];
    if (numbersCopy.length === 0) {
        return [];
    } else if (numbersCopy.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        numbersCopy.splice(
            1,
            numbersCopy.length - 1,
            numbersCopy[numbersCopy.length - 1]
        );
        return numbersCopy;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const numbersCopy = numbers.map((numbers: number): number => numbers * 3);
    return numbersCopy;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numbersCopy = numbers.map((numbers: string): number =>
        isNaN(Number(numbers)) ? 0 : Number(numbers)
    );
    return numbersCopy;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */

// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (numbers: string[]): number[] => {
    const amounts = numbers.map((words: string): string =>
        words[0] === "$" ? words.substring(1) : words
    );
    const numbersCopy = amounts.map((numbers: string): number =>
        isNaN(Number(numbers)) ? 0 : Number(numbers)
    );
    return numbersCopy;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const upperMessage = messages.map((words: string): string =>
        words[words.length - 1] === "!" ? words.toUpperCase() : words
    );
    const filteredMessage = upperMessage.filter(
        (words: string): boolean => words[words.length - 1] !== "?"
    );
    return filteredMessage;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter(
        (strings: string): boolean => strings.length < 4
    );
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const value = colors.every(
            (color: string): boolean =>
                color === "red" || color === "blue" || color === "green"
        );
        return value;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const strings = addends.join("+");

    return String(sum) + "=" + strings;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const foundIndex = values.findIndex(
        (numbers: number): boolean => numbers < 0
    );
    const slicedArray = values.slice(0, foundIndex);
    const sumWNegative = slicedArray.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const sum = values.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const hasAllPos = values.every((numbers: number): boolean => numbers >= 0);

    if (hasAllPos) {
        return [...values, sum];
    } else {
        const negArray = [...values];
        negArray.splice(foundIndex + 1, 0, sumWNegative);
        return negArray;
    }
}
