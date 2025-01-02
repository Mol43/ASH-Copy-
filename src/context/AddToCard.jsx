import { create } from 'zustand';

export const useStore = create((set, get) => ({
  card: 0,
  count: 1,
  totalPrice: 1,
  animatedPrice: 1,

  addToCart: () => {
    set((state) => ({ card: state.card + 1 }));
  },

  inc: () => set((state) => ({ count: state.count + 1 })),

  dec: () => {
    const currentVal = get().count;
    if (currentVal > 1) set((state) => ({ count: state.count - 1 }));
  },

  updateTotalPrice: () => {
    const price = 129;
    const currentValue = get().count;
    const totalSum = currentValue * price;
    set({ totalPrice: totalSum });

    get().animateTotalPrice(totalSum);
  },

  animateTotalPrice: (totalSum) => {
    let animationId;
    const animate = () => {
      set((state) => {
        const step = (totalSum - state.animatedPrice) / 10;
        if (Math.abs(totalSum - state.animatedPrice) < Math.abs(step)) {
          cancelAnimationFrame(animationId);
          return { animatedPrice: totalSum };
        }
        animationId = requestAnimationFrame(animate);
        return { animatedPrice: state.animatedPrice + step };
      });
    };
    requestAnimationFrame(animate);
  }
}));
