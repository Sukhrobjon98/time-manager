import { defineStore } from "pinia";

export type TaskType = "bugun" | "ertaga" | "keyin";

export type IErtaga = {
  id: any;
  task: string;
  isDone: boolean;
  date: string;
  fullDate?: string;
  key: TaskType;
};

export const taskData = defineStore({
  id: "taskData",
  state: () => ({
    date2: [{ id: 0, task: "", isDone: false, date: "", key: "bugun" }],
    data: [
      {
        id: 1,
        task: "Ovqatlanaman",
        isDone: false,
        date: "8:00",
        key: "bugun",
      },
      {
        id: 2,
        task: "Futbol o'ynayman",
        isDone: false,
        date: "12:00",
        key: "ertaga",
      },
      {
        id: 3,
        task: "Darsga boraman",
        isDone: false,
        date: "15:00",
        key: "keyin",
        fullDate: "09.09.2021",
      },
      
    ] as IErtaga[],
  }),

  actions: {
    addTask(task: IErtaga) {
      this.data.push(task);
    },
    updateTask(task: IErtaga) {
      const index = this.data.findIndex((item) => item.id === task.id);
      this.data[index] = task;
    },
  },
});
