import React, { useRef, useState } from 'react';
import useStore from '../stores/MusicDataStore';

export default function RhythmMaker() {
    const [clockRunning, setClockRunning] = useState(false);
    const [clicksLeft, setClicksLeft] = useState(0);
    const [bpmDisplay, setBpmDisplay] = useState(0);

    const setNoteDurations = useStore(state => state.setNoteDurations);
    const tempo = useStore(state => state.tempo);


    const clicks = 0;

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
        setClicksLeft(clicksLeft + 1);

    }

    const calculateBPM = (intervalArr) => {
        // intervalArr.shift();
        intervalArr.push(intervalArr[intervalArr.length - 1]);

        let timeDiff = [];

        for (let i = 0; i < intervalArr.length - 1; i++) {
            timeDiff.push(intervalArr[i + 1] - intervalArr[i]);
        }

        // 128 ticks per beat
        // 60 beats per minute
        // 1 beat per second 
        // 1 quarter note per second 
        // 128 ticks per second

        // duration in 10ms increments
        // 100 = 1000 ms = 1 sec long
        // duration of quarter note is 1000 ms
        // 100 = quarter note 
        // AKA duaration = '4' for quarter

        let finalDuration = []

        for (const time of timeDiff) {
            // [36, 37, 35, 37, 37, 34, 0]
            // [360, 370, 350, 370, 370, 340, 0]
            // 120 / 60 = 2 quarter per second = quarter is 500
            // 1000 / 500 = 2
            // 1000
            // tempo / 60 = quarter per second
            // 1000 / (2)
            // if length = 1000, quarter note

            const bps = tempo / 60;
            const durationPerBeat = 1000 / bps;

            console.log({durationPerBeat});

            // beat duration from time 
            console.log(time * 10);
            console.log();

            const noteDuration = time * 10 / durationPerBeat;

            console.log({noteDuration})

            const rounded = Math.round(noteDuration * 4) / 4;

            finalDuration.push(rounded * 128);


            console.log({rounded});


            // console.log(time * 10)
        }

        finalDuration.pop();

        setNoteDurations(finalDuration);


        

        console.log(timeDiff);
    }

    const reset = () => {
        timeInterval.current = []
        clock.current = 0;
    }

    const handleKeyPress = (e) => {
        e.preventDefault();

        console.log(e.key);

        if (!clockRunning) {
            timeInterval.current = [];
            setClockRunning(true);
            setClicksLeft(clicks);
            count();
        } else {
            if (e.key === "Enter") {
                markTheBeat();
                updateClickCount();
                setClockRunning(0);
                clock.current = 0;
                calculateBPM(timeInterval.current);
            } else {
                markTheBeat();
                updateClickCount();

                // clock.current = 0;
            }
        }
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

                // clock.current = 0;
            }
        }
    }

    return (
        <div className='col-12' >
            <div className='row'>
                <div className="col-5">
                    <input type="text" onKeyPress={handleKeyPress} onClick={handleClick} className='w-100 p-3 form-control'></input>
                </div>
                <div className='col-7 text-center align-self-center'>
                    <span className='bpm-counter '>{!clockRunning ? "Type Rhythm" : clicksLeft + " notes"}</span>
                </div>

            </div>
        </div>
    )
}