import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import timeline from "./Timeline";

const TimelineComponent = (props, playbackRef) => {
  const container = useRef();

  const pianoRoll = timeline(props);


  useImperativeHandle(playbackRef, () => pianoRoll.playback)

  useEffect(() => {
    container.current.appendChild(pianoRoll.view);
  });

  return <div ref={container} />;
};

export default forwardRef(TimelineComponent);