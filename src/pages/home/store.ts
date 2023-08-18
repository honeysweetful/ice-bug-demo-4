import { create } from 'zustand';

type StoreProps = {
  count: number;
  add: () => void;
  cut: () => void;
};

const usePageStore = create<StoreProps>((set, get) => {
  const add = () => {
    set({
      count: get()?.count + 1,
    });
  };
  const cut = () => {
    set({
      count: get()?.count - 1,
    });
  };
  return {
    count: 0,
    add,
    cut,
  };
});

export default usePageStore;