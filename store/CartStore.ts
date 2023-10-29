import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartState = {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: number) => void;
  clear: () => void;
  print: (state: CartState) => void;
};

export const useCart = create<CartState>()((set) => ({
  items: [] as CartItem[],
  add: (item) => set((state) => ({ items: [...state.items, item] })),
  remove: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  clear: () => set({ items: [] }),
  print: (state) => console.log(state.items),
}));
