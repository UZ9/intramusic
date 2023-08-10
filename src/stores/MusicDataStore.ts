import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface MusicDataState {
    tempo: number, 
    noteDurations: number[],
    setNoteDurations: (noteDurations: number[]) => void,
    setTempo: (tempo: number) => void
}

const useStore = create<MusicDataState>()(
    devtools(
            (set) => ({
                tempo: 120,
                noteDurations: [],
                setNoteDurations: (noteDurations) => set((state) => ({ noteDurations: noteDurations })),
                setTempo: (tempo) => set((state) => ({ tempo: tempo }))
            }),
    )
)

export default useStore;