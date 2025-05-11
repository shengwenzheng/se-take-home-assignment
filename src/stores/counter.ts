import { createSelectors } from "@/utils/createSelector";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type TCounter = {
    counter: number;
    add: () => void;
    sub: () => void
}
export const useCounter = createSelectors(create<TCounter>()(
    immer((set) => ({
        counter: 0,
        add: () => set(state => {
            state.counter++
        }),
        sub: () => set(state => {
            state.counter--
        }),
    }))
))