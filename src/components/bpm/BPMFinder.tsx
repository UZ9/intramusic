import { Touch_1Filled } from "@carbon/icons-react";
import React, { useRef, useState } from "react";
import MenuButton from "../editor/menu/menubutton.component";
import MenuInput from "../editor/menu/menuinput.component";
import useStore from "../../stores/MusicDataStore";

export default function BPMFinder() {
    const [clockRunning, setClockRunning] = useState(false);
    const [clicksLeft, setClicksLeft] = useState(0);
    const [bpmDisplay, setBpmDisplay] = useState(0);

    const setBpm = useStore((state) => state.setTempo);

    const clicks = 8;

    const clock = useRef(0);
    const timeInterval = useRef([]);

    const counter = useRef(null);

    const count = () => {
        clearInterval(counter.current);
        counter.current = setInterval(() => {
            clock.current++;
        }, 10);
    };

    const markTheBeat = () => {
        console.log("pushing " + clock.current);
        timeInterval.current.push(clock.current);
    };

    const updateClickCount = () => {
        setClicksLeft(clicksLeft - 1);
    };

    const calculateBPM = (intervalArr) => {
        console.log(intervalArr);
        intervalArr.shift();
        intervalArr.push(intervalArr[intervalArr.length - 1]);
        var totalTime8beats = intervalArr.reduce(
            (sum, interval) => sum + interval
        );
        var bpm = Math.floor(60000 / ((totalTime8beats * 10) / 8));

        reset();
        setBpmDisplay(bpm);
        setBpm(bpm);
    };

    const reset = () => {
        timeInterval.current = [];
        clock.current = 0;
    };

    const handleClick = (e) => {
        if (!clockRunning) {
            timeInterval.current = [];
            setClockRunning(true);
            setClicksLeft(clicks);
            count();
        } else {
            if (timeInterval.current.length > 6) {
                markTheBeat();
                updateClickCount();
                setClockRunning(false);
                clock.current = 0;
                calculateBPM(timeInterval.current);
            } else {
                markTheBeat();
                updateClickCount();

                clock.current = 0;
            }
        }
    };

    return (
        <>
            <MenuButton
                onClick={handleClick}
                icon={<Touch_1Filled size={20} />}
            />
            <MenuInput label="BPM" placeholder={bpmDisplay + ""} />
        </>
    );
}
