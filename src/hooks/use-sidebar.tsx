import { create } from "zustand";

export interface UseSidebar {
  active: boolean;
  onShow: () => void;
  onHide: () => void;
}

export const useSidebar = create<UseSidebar>((set) => ({
  active: false,
  onShow: () => set({ active: true }),
  onHide: () => set({ active: false }),
}));
