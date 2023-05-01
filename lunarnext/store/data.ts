// store.ts
import { create } from 'zustand';

type State = {
  data: any[];
  setData: (data: any[]) => void;
};

export const useDataStore = create<State>((set) => ({
  data: [],
  setData: (data) => set(() => ({ data })),
}));
