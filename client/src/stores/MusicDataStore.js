import create from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools';

const useStore = create(set => ({
    tempo: 120,
    noteDurations: [],
    setNoteDurations: (noteDurations) => set({ noteDurations }),
    setTempo: (tempo) => set({ tempo })
}))

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useStore);
}

export default useStore;