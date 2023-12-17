<template>
  <div class="task-keyin">
    <h4>Keyin</h4>
    <div>
      <InputCheckbox :iteams="iteams" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { taskData } from "../store/data";
import InputCheckbox from "./InputCheckbox.vue";
const keyin = taskData();
const iteams = ref<any[]>(keyin.data.filter((iteam) => iteam.key === "keyin"));
iteams.value.sort((a, b) => Number(b.isDone) - Number(a.isDone)).reverse();

watch(keyin.data, (newValue) => {
  iteams.value = newValue.filter((iteam) => iteam.key === "keyin");
  iteams.value.sort((a, b) => Number(b.isDone) - Number(a.isDone)).reverse();
});
</script>
<style scoped>
.task-keyin {
  font-size: 24px;
  font-weight: bolder;
  margin-bottom: 20px;
}
</style>
