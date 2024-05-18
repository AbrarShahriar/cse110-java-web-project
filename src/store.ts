import { create } from "zustand";

export interface ISectionData {
  slug: string;
  index: number;
  locked: boolean;
}

interface IStore {
  selectedLang: "en" | "bn";
  sectionData: ISectionData[];
}

interface IActions extends IStore {
  setLang: (val: "en" | "bn") => void;
  setSectionData: (val: ISectionData[]) => void;
}

// INITIAL STATE
const initialState: IStore = {
  selectedLang: "en",
  sectionData: JSON.parse(localStorage.getItem("sections") as string) || [],
};

// ACTIONS
const actions = (set: (state: IStore | Partial<IStore>) => void) => ({
  setLang: (val: "en" | "bn") => set({ selectedLang: val }),
  setSectionData: (val: ISectionData[]) => set({ sectionData: val }),
});

// STORE
export const useAppStore = create<IActions>((set) => ({
  ...initialState,
  ...actions(set),
}));
