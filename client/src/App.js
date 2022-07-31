import "./App.css";
import Draggable from "react-draggable";
import { ReactPlayerWrapper } from "./components/ReactPlayerWrapper";
import BPMFinder from "./components/BPMFinder";
import MIDIExporter from "./components/MIDIExporter";
import RhythmMaker from "./components/RhythmMaker";
import PianoRollModule from "./components/PianoRollModule";
import TimelineComponent from "./components/timeline/TimelineComponent";
import PianoRoll from "./components/PianoRoll";
import { useRef } from "react";
import ReactPlayer from "react-player/file";
import { useEffect } from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <button
                className="navbar-toggler ml-auto mb-2 bg-light"
                type="button"
                data-toggle="collapse"
                data-target="#mainNav"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mainNav">
                <div className="container-fluid">
                    <div className="row">
                        <div className="top-navbar col-12 ml-auto fixed-top py-2 ">
                            <div className="row">
                                <div className="logo-region">
                                    <div className="sidebar-title my-auto ms-3 d-block logoprimary">
                                        <span className="logoprimary">
                                            INTRAMUSIC
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-10 d-flex flex-row-reverse my-auto ">
                                    <MIDIExporter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function App() {
    const timeline = useRef(null);
    const reactPlayer = useRef(null);

    useEffect(() => {
        console.log(reactPlayer.current);
    })

    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="col-xl-2 ml-auto">
                    <div className="row ms-md-1 mr-md-1 pt-3">
                        <Draggable grid={[40, 40]}>
                            <div className="p-3 card card-common">
                                <BPMFinder />
                            </div>
                        </Draggable>
                    </div>
                </div>
            </div>

            <div className="d-inline-flex container-fluid">
                <div className="row ms-md-1 mr-md-1 pt-3">
                    <Draggable grid={[40, 40]}>
                        <div className="p-3 card card-common">
                            <ReactPlayer
                                url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                                volume={0.8}
                                width={384}
                                height={216}
                                muted={true}
                                playing={true}
                                controls={true}
                                ref={reactPlayer}
                            />
                        </div>
                    </Draggable>
                </div>
            </div>

            <div className="container-fluid">
                <div className="col-xl-3 ml-auto">
                    <div className="row ms-md-1 mr-md-1 pt-3">
                        <Draggable grid={[40, 40]}>
                            <div className="p-3 card card-common">
                                <RhythmMaker timeline={timeline} />
                            </div>
                        </Draggable>
                    </div>
                </div>
            </div>

            <div className="d-inline-flex container-fluid">
                <div className="row ms-md-1 mr-md-1 pt-3">
                    {/* <Draggable grid={[40, 40]}> */}
                    <div className="p-3 card card-common">
                        <TimelineComponent
                            ref={timeline}
                            player={reactPlayer}
                            width={1800}
                            height={200}
                        />
                    </div>
                    {/* </Draggable> */}
                </div>
            </div>

            <div className="vh-100">d</div>
        </>
    );
}

export default App;
