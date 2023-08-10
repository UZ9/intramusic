import ReactPlayer from "react-player";

export default function ReactPlayerWrapper() {
    return (
        <>
            <ReactPlayer url='https://youtu.be/-jurWjh1Kag'
                volume={0.8}
                width={384}
                height={216}
                muted={true}
                playing={true}
                controls={false} />
        </>
    )
}