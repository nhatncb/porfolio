import { create } from 'zustand';

export interface GlobalState {
  drawer: boolean;
  setDrawer: (payload: boolean) => void;
}
const useGlobalState = create<GlobalState>((set) => ({
  drawer: false,
  setDrawer: (payload) => set({ drawer: payload }),
}));

export default useGlobalState;
