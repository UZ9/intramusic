import useStore from "../../stores/MusicDataStore";
import MidiWriter from "midi-writer-js";

export default function MIDIExporter() {
    const tempo = useStore((state) => state.tempo);
    const noteDurations = useStore((state) => state.noteDurations);

    function exportMidi() {
        const track = new MidiWriter.Track();

        // Set track properties
        track.setTempo(tempo, 0);

        noteDurations.forEach((duration) => {
            track.addEvent(
                new MidiWriter.NoteEvent({
                    pitch: ["E4"],
                    duration: `T${duration}`,
                })
            );
        });

        const write = new MidiWriter.Writer(track);

        console.log(write.dataUri());
    }

    return (
        <>
            <button
                type="button"
                className="text-whit text-sm mx-16 font-special text-[#cdcdcd] px-4 rounded-md border-2 border-red-highlight p-2 hover:text-white text-left hover:bg-red-highlight"
                onClick={exportMidi}
            >
                Export to Musescore
            </button>
        </>
    );
}
