import { create } from "zustand";

interface IStore {
  selectedLang: "en" | "bn";
}

interface IActions extends IStore {
  setLang: (val: "en" | "bn") => void;
}

// INITIAL STATE
const initialState: IStore = {
  selectedLang: "en",
};

// ACTIONS
const actions = (set: (state: IStore | Partial<IStore>) => void) => ({
  setLang: (val: "en" | "bn") => set({ selectedLang: val }),
});

// STORE
export const useAppStore = create<IActions>((set) => ({
  ...initialState,
  ...actions(set),
}));
