import { useEffect, useRef, useState } from "react";
import PianoRoll from "./PianoRoll";
import { Midi } from "@tonejs/midi";
import { FileUploader } from "react-drag-drop-files";

export default function PianoRollModule() {

    const [noteData, setNoteData] = useState([]);

    console.log(test);

    const playbackRef = useRef();

    useEffect(() => {
        console.log("Callec");

        window.addEventListener("keydown", (e) => {
            const key = e.key;

            e.stopPropagation();

            if (key === " ") {
                console.log("Toggling")
                playbackRef.current.toggle();
            } else if (key === "Enter") {
                console.log("Seeking");
                playbackRef.current.seek(0);
            }
        });

    }, [])


    const updateData = (reader) => {
        const arrayBuffer = reader.target.result;
        // const base64String = btoa(binaryString);


        const midi = new Midi(arrayBuffer);

        console.log(midi.duration);

        console.log("Done!");
        console.log(arrayBuffer);

        const midiJson = midi.toJSON();

        console.log(midiJson)

        // 120 / 60 / 0.5

        // ["0:0:0", "F8", ""],
        const midiMapped = midiJson.tracks[0].notes.map(note => [ note.time, note.name, Math.round(midiJson.header.tempos[0].bpm / 60 / note.duration)]);

        console.log(midiMapped);

        setNoteData(midiMapped)

        // const sortedData = midiArray.track[0].map(event => {

        // })
    }

    const handleFileChange = (file) => {

        console.log(file);

        console.log(URL.createObjectURL(file))


        const reader = new FileReader();

        reader.onload = updateData;

        reader.readAsArrayBuffer(file);

        // reader.readAsBinaryString(file);

        // // Update form information
        // setFile(e.target.files[0]);


    };



    return (
        <>
            <FileUploader handleChange={handleFileChange} label="Upload your audio file here!" name="file" types={["mid", "midi"]} />

            {noteData.length !== 0 ? <PianoRoll
                ref={playbackRef}
                width={2000}
                height={1200}
                zoom={25}
                resolution={1}
                gridLineColor={0x333333}
                blackGridBgColor={0x1e1e1e}
                whiteGridBgColor={0x282828}
                noteData={
                    noteData
                    // [[0, "F8", "1"],
                    // [0, "C6", "4"]]
                    
                    // ["0:0:0", "F8", ""],
                    // [0, "C6", "16"],
                    // ["0:0:0", "D4", "2n"],
                    // ["0:0:0", "C1", "2n"],
                    // [0.5, "B4", "4n"],
                    // ["0:3:0", "A#4", "4n"],
                    // ["0:0:0", "F2", ""],
                }
            /> : undefined}


        </>


    )
}