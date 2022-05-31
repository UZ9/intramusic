import useStore from "../stores/MusicDataStore";
import MidiWriter from "midi-writer-js"

export default function MIDIExporter() {
    const tempo = useStore(state => state.tempo);
    const noteDurations = useStore(state => state.noteDurations);

    function exportMidi() {

        const track = new MidiWriter.Track();

        // Set track properties
        track.setTempo(tempo);

        noteDurations.forEach(duration => {
            track.addEvent(new MidiWriter.NoteEvent({ pitch: ['E4'], duration: `T${duration}` }))
        })

        const write = new MidiWriter.Writer(track);

        console.log(write.dataUri());
    }


    return (<>
        <button onClick={exportMidi} className="btn btn-primary">
            Export
        </button>

    </>)

}