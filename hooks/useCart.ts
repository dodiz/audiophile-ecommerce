import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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
  update: (id: number, quantity: number) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [] as CartItem[],
      add: (item) => {
        const existingItem = get().items.find((i) => i.id === item.id);
        if (!existingItem) {
          set({ items: [...get().items, item] });
          return;
        }
        set({
          items: get().items.map((i) => {
            if (i.id === item.id) {
              return { ...i, quantity: i.quantity + item.quantity };
            }
            return i;
          }),
        });
      },
      remove: (id) =>
        set({
          items: get().items.filter((item) => item.id !== id),
        }),
      update: (id: number, quantity: number) => {
        if (quantity === 0)
          return set({ items: get().items.filter((item) => item.id !== id) });
        const items = get().items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity };
          }
          return item;
        });
        set({ items });
      },
      clear: () => set({ items: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
