<template>
  <div class="task-bugun">
    <h4>Bugun</h4>
    <div>
      <InputCheckbox :iteams="iteams" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { taskData } from "../store/data";
import InputCheckbox from "./InputCheckbox.vue";
const bugun = taskData();

const iteams = ref<any[]>(bugun.data.filter((iteam) => iteam.key === "bugun"));
iteams.value.sort((a, b) => Number(b.isDone) - Number(a.isDone)).reverse();


// Bu yerda datalarni o'zgarishlariini kuzatib turadi va filter qiladi
watch(bugun.data, (newValue) => {
  iteams.value = newValue.filter((iteam) => iteam.key === "bugun");
  iteams.value.sort((a, b) => Number(b.isDone) - Number(a.isDone)).reverse();
});
</script>
<style scoped>
.task-bugun {
  font-size: 24px;
  font-weight: bolder;
  margin-bottom: 20px;
  margin-top: 35px;
}

.bugun-box {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: start;
  font-size: smaller;
  font-weight: normal;
}
</style>
