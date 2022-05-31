import React, { useRef, useState } from 'react';

export default function BPMFinder() {
    const [clockRunning, setClockRunning] = useState(false);
    const [clicksLeft, setClicksLeft] = useState(0);
    const [bpmDisplay, setBpmDisplay] = useState(0);

    const clicks = 8;

    const clock = useRef(0);
    const timeInterval = useRef([]);

    const counter = useRef(null);

    const count = () => {
        clearInterval(counter.current);
        counter.current = setInterval(() => { clock.current++; }, 10);
    }

    const markTheBeat = () => {
        console.log("pushing " + clock.current);
        timeInterval.current.push(clock.current);
    }

    const updateClickCount = () => {
        setClicksLeft(clicksLeft - 1);

    }

    const calculateBPM = (intervalArr) => {
        console.log(intervalArr);
        intervalArr.shift();
        intervalArr.push(intervalArr[intervalArr.length - 1]);
        var totalTime8beats = intervalArr.reduce((sum, interval) => sum
            + interval);
        var bpm = Math.floor(60000 / ((totalTime8beats * 10) / 8));

        reset();
        setBpmDisplay(bpm);
    }

    const reset = () => {
        timeInterval.current = []
        clock.current = 0;
    }

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
                setClockRunning(0);
                clock.current = 0;
                calculateBPM(timeInterval.current);
            } else {
                markTheBeat();
                updateClickCount();

                clock.current = 0;
            }
        }
    }

    return (
        <div className='col-12' >
            <div className='row'>
                <div className="col-7">
                    <button onClick={handleClick} className='btn w-100 p-3 btn-primary'>{!clockRunning ? "Press for BPM" : clicksLeft + " clicks left"}</button>
                </div>
                <div className='col-5 text-center align-self-center'>
                    <span className='bpm-counter '>{bpmDisplay}</span>
                </div>

            </div>
        </div>
    )
}