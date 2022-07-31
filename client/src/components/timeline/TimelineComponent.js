import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import timeline from "./Timeline";

const TimelineComponent = (props, playbackRef) => {
  const container = useRef();

  console.log("Rerendering timeline");
  console.log(props.player);

  let pianoRoll = useRef();

  useImperativeHandle(playbackRef, () => pianoRoll)

  useEffect(() => {

    if (props.player.current !== null) {
      pianoRoll.current = timeline(props.player.current);

      container.current.appendChild(pianoRoll.current.view);
    }
    
  });

  return <div ref={container} />;
};

export default forwardRef(TimelineComponent);