<template>
  <div class="task-ertaga">
    <h4>Ertaga</h4>
    <div>
      <InputCheckbox :iteams="iteams" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { taskData } from "../store/data";
import InputCheckbox from "./InputCheckbox.vue";
const ertaga = taskData();
const iteams = ref<any[]>(
  ertaga.data.filter((iteam) => iteam.key === "ertaga")
);
iteams.value.sort((a, b) => Number(b.isDone) - Number(a.isDone)).reverse();

watch(ertaga.data, (newValue) => {
  iteams.value = newValue.filter((iteam) => iteam.key === "ertaga");
  iteams.value.sort((a, b) => Number(b.isDone) - Number(a.isDone)).reverse();
});
</script>
<style scoped>
.task-ertaga {
  font-size: 24px;
  font-weight: bolder;
  margin-bottom: 35px;
}
</style>
