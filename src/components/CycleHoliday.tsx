import React, { useState } from "react";
import { Button } from "react-bootstrap";
import New_Years from "../Images/New_Year.png";
import Christmas from "../Images/Christmas.png";
import Halloween from "../Images/Halloween.png";
import Thanksgiving from "../Images/Thanksgiving.png";
import Valentines_Day from "../Images/Valentines_Day.png";

export function CycleHoliday(): JSX.Element {
    //New Years, Valentines Day, Halloween, Thanksgiving, Christmas
    type Holiday =
        | "New_Years"
        | "Valentines_Day"
        | "Halloween"
        | "Thanksgiving"
        | "Christmas";
    const holidayAlphabet: Record<Holiday, Holiday> = {
        Christmas: "Halloween",
        Halloween: "New_Years",
        New_Years: "Thanksgiving",
        Thanksgiving: "Valentines_Day",
        Valentines_Day: "Christmas"
    };
    const holidayTime: Record<Holiday, Holiday> = {
        New_Years: "Valentines_Day",
        Valentines_Day: "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "New_Years"
    };

    const [activeHoliday, setActiveHoliday] = useState<Holiday>("New_Years");

    function changeAlphabet(): string {
        const newHoliday = holidayAlphabet[activeHoliday];
        setActiveHoliday(newHoliday);
        return activeHoliday;
    }
    function changeTime(): void {
        const newHoliday = holidayTime[activeHoliday];
        setActiveHoliday(newHoliday);
    }

    return (
        <div>
            <Button onClick={changeAlphabet}>Change by Alphabet</Button>
            <Button onClick={changeTime}>Change by Year</Button>
            <div>
                <span> Holiday: {activeHoliday} </span>
                {activeHoliday === "New_Years" ? (
                    <img src={New_Years} alt="Image" />
                ) : activeHoliday === "Valentines_Day" ? (
                    <img src={Valentines_Day} alt="Image" />
                ) : activeHoliday === "Halloween" ? (
                    <img src={Halloween} alt="Image" />
                ) : activeHoliday === "Thanksgiving" ? (
                    <img src={Thanksgiving} alt="Image" />
                ) : (
                    <img src={Christmas} alt="Image" />
                )}
            </div>
        </div>
    );
}
