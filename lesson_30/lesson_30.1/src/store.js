import { create } from "zustand";

const useStore = create((set) => ({
  tasks: [],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  clearTasks: () =>
    set({
      tasks: [],
    }),
}));

export default useStore;
