import { create } from 'zustand';

export interface GlobalState {
  drawer: boolean;
  setDrawer: (payload: boolean) => void;
  bgIndex: number;
  setBgIndex: (payload: number) => void;
}

const useGlobalState = create<GlobalState>((set, get) => ({
  drawer: false,
  setDrawer: (payload) => set({ drawer: payload }),
  bgIndex: 0,
  setBgIndex: (payload) => {
    const { bgIndex } = get();
    const nextIndex = bgIndex + payload;
    if (nextIndex > 13) {
      set({ bgIndex: 0 });
    } else if (nextIndex < 0) {
      set({ bgIndex: 13 });
    } else {
      set({ bgIndex: nextIndex });
    }
  },
}));

export default useGlobalState;
