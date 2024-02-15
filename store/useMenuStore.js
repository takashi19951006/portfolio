import { create } from "zustand";

export const useMenuStore = create((set) => ({
  isOpen: false,
  openMobleMenu: () => {
    set((state) => ({ isOpen: !state.isOpen }))},
  closeMobileMenu: () => set({ isOpen: false }),
}));
