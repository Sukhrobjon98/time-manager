<template>
  <div>
    <div class="input-list">
      <input type="text" placeholder="Bu yerda text bor" v-model="data" />
      <button @click="getInputData">+</button>
    </div>
    <div>
      <p>
        Bugun: {{ day }}.{{ month }}.{{ years }}, {{ hours }}:{{
          minutes ? (minutes < 10 ? "0" + minutes : minutes) : minutes
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
let hours = time.getHours();
let minutes = time.getMinutes();
let years = time.getFullYear();
let month = time.getMonth();
let day = time.getDate();
let data = ref("");
let taskDatas = taskData();
let timeVaqt = ref("");
let inputEnum = ["bugun", "ertaga"];
let cheackInput = (data: string) => {
  let dataValue = data.toLowerCase().split(" ");
  for (const iteam of dataValue) {
    // Bu yerda inputEnum ichida borligini tekshirib boramiz
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
          date: timeVaqt.value || `${hours}:${minutes}`,
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
          date: timeVaqt.value || `${hours}:${minutes}`,
          key: "bugun",
        });
        timeVaqt.value = "";
        return;
      }
    }
    if (iteam.includes(".") !== false) {
      let index = dataValue.indexOf(iteam);
      if (dataValue[dataValue.length - 1].includes(":")!== false) {
        let timeIndex = dataValue.length - 1;
        timeVaqt.value = dataValue[timeIndex];
        dataValue.splice(timeIndex, timeIndex + 1);
      }
      dataValue.splice(index, index + 1);
      taskDatas.addTask({
        id: uuid.v4(),
        task: dataValue.join(" "),
        isDone: false,
        date: timeVaqt.value || `${hours}:${minutes}`,
        fullDate: iteam,
        key: "keyin",
      });
      timeVaqt.value = "";
      return;
    }
  }
  if (dataValue.length > 0) {
    taskDatas.addTask({
      id: uuid.v4(),
      task: dataValue.join(" "),
      isDone: false,
      date: timeVaqt.value || `${hours}:${minutes}`,
      key: "bugun",
    });
    timeVaqt.value = "";
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
}
p {
  margin: 0;
  font-size: 15px;
  margin-top: 5px;
}
</style>
