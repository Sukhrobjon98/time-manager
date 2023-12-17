<template>
  <div>
    <ul class="task-title">
      <li>Bajatilganlar:{{ bajatilgan }}</li>
      <li>Bararilmaganlar: {{ bararilmagan }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { taskData } from "../store/data";
import { ref, watch } from "vue";
let data = taskData();
let bararilmagan = ref<number>(
  data.data.filter((iteam) => iteam.isDone === false).length
) as any;
let bajatilgan = ref<number>(data.data.length - bararilmagan.value) as any;
watch(data.data, (newValue) => {
  bararilmagan.value = newValue.filter(
    (iteam) => iteam.isDone === false
  ).length;
  bajatilgan.value = newValue.length - bararilmagan.value;
});
</script>

<style>
.task-title {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  gap: 10px;
  text-align: start;
  font-size: smaller;
  font-weight: normal;
  opacity: 0.6;
}
</style>
