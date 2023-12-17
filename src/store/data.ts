import { defineStore } from "pinia";

export type TaskType = "bugun" | "ertaga" | "keyin";

type IErtaga = {
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
        task: "Ovqat qilaman",
        isDone: false,
        date: "9:00",
        key: "ertaga",
      },
      {
        id: 2,
        task: "Bozorga boraman",
        isDone: false,
        date: "12:00",
        key: "bugun",
      },
      {
        id: 3,
        task: "Ishga chiqmayman",
        isDone: false,
        date: "15:00",
        key: "keyin",
        fullDate: "09-09-2021",
      },
      {
        id: 4,
        task: "Ishga chiqmayman",
        isDone: false,
        date: "15:00",
        key: "ertaga",
      },
    ] as IErtaga[],
  }),

  actions: {
    addTask(task: IErtaga) {
      this.data.push(task);
    },
    filterTask(task: string | TaskType) {
      this.date2 = this.data.filter((item) => item.key === task);
      console.log(this.date2);

      return this.date2;
    },
  },
});