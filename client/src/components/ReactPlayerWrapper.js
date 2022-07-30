import ReactPlayer from 'react-player/file'

export function ReactPlayerWrapper(props) {
    return (
        <>
            <ReactPlayer url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
                volume={0.8}
                width={384}
                height={216}
                muted={true}
                playing={true}
                controls={false} />
        </>
    )
}