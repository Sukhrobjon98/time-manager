<template>
  <div>
    <div class="input-list">
      <input type="text" placeholder="Yangi vazifa qo'shish" v-model="data" />
      <button @click="getInputData">+</button>
    </div>
    <div>
      <p>
        Bugun: {{ time.getDate() }}.{{ time.getMonth() }}.{{
          time.getFullYear()
        }}, {{ time.getHours() }}:{{
          time.getMinutes()
            ? time.getMinutes() < 10
              ? "0" + time.getMinutes()
              : time.getMinutes()
            : time.getMinutes()
        }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { uuid } from "vue-uuid";
import { taskData } from "../store/data";
let time = new Date();
let data = ref("");
let taskDatas = taskData();
let timeVaqt = ref("");
let inputEnum = ["bugun", "ertaga"];
let cheackInput = (data: string) => {
  let dataValue = data.toLowerCase().split(" ");
  for (const iteam of dataValue) {
    // Bu yerda inputEnum ichida kalit so'zlar borligini tekshiramiz
    if (inputEnum.includes(iteam).toString() !== "false") {
      let index = dataValue.indexOf(iteam);
      if (iteam === "ertaga") {
        if (dataValue[dataValue.length - 1].includes(":")) {
          let timeIndex = dataValue.length - 1;
          timeVaqt.value = dataValue[timeIndex];
          dataValue.splice(timeIndex, timeIndex + 1);
        }
        dataValue.splice(index, index + 1);
        taskDatas.addTask({
          id: uuid.v4(),
          task: dataValue.join(" "),
          isDone: false,
          date:
            timeVaqt.value ||
            `${time.getHours()}:${
              time.getMinutes()
                ? time.getMinutes() < 10
                  ? "0" + time.getMinutes()
                  : time.getMinutes()
                : time.getMinutes()
            }`,
          key: "ertaga",
        });
        timeVaqt.value = "";
        return;
      }
      if (iteam === "bugun") {
        if (dataValue[dataValue.length - 1].includes(":")) {
          let timeIndex = dataValue.length - 1;
          timeVaqt.value = dataValue[timeIndex];
          dataValue.splice(timeIndex, timeIndex + 1);
        }
        dataValue.splice(index, index + 1);
        taskDatas.addTask({
          id: uuid.v4(),
          task: dataValue.join(" "),
          isDone: false,
          date: timeVaqt.value || `${time.getHours()}:${time.getMinutes()}`,
          key: "bugun",
        });
        timeVaqt.value = "";
        return;
      }
    }

    // Bu yerda to'liq sana borligini tekshiramiz
    if (iteam.includes(".") !== false) {
      let index = dataValue.indexOf(iteam);
      if (dataValue[dataValue.length - 1].includes(":") !== false) {
        let timeIndex = dataValue.length - 1;
        console.log(dataValue[timeIndex]);

        timeVaqt.value = dataValue[timeIndex];
        dataValue.splice(timeIndex, timeIndex + 1);
      } else {
        timeVaqt.value = `${
          time.getHours() < 23 ? time.getHours() + 1 : "00"
        }:00`;
      }
      let iteamDate = dataValue[index];
      console.log(iteamDate);

      dataValue.splice(index, index + 1);
      taskDatas.addTask({
        id: uuid.v4(),
        task: dataValue.join(" "),
        isDone: false,
        date: timeVaqt.value,
        fullDate: iteamDate,
        key: "keyin",
      });
      timeVaqt.value = "";
      return;
    }
  }


  // Bu yerda vaqt hech qanday kalit so'zlar bo'lmasligini tekshiramiz
  if (dataValue.length > 0) {
    taskDatas.addTask({
      id: uuid.v4(),
      task: dataValue.join(" "),
      isDone: false,
      date:
        timeVaqt.value ||
        `${time.getHours()}:${
          time.getMinutes()
            ? time.getMinutes() < 10
              ? "0" + time.getMinutes()
              : time.getMinutes()
            : time.getMinutes()
        }`,
      key: "bugun",
    });
    timeVaqt.value = "";
    return;
  }
};

let getInputData = () => {
  if (data.value === "") return;
  cheackInput(data.value);

  data.value = "";
};
</script>

<style scoped>
.input-list {
  display: flex;
  justify-content: space-between;
  height: 40px;
}
input {
  width: 80%;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  font-size: 18px;
}
button {
  width: 10%;
  border-radius: 5px;
  font-size: 25px;
  background-color: rgb(37, 198, 42);
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
}
button:hover {
  background-color: rgb(3, 57, 5);
  color: white;
}
p {
  margin: 0;
  font-size: 15px;
  margin-top: 5px;
}
</style>
