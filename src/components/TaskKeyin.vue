<template>
  <div class="task-keyin">
    <h4>Keyin</h4>
    <div>
      <ul class="keyin-box">
        <li v-for="iteam in iteams" v-bind:key="iteam.id">
          <div class="box-iteam1">
            <input type="checkbox" />
            <p>{{ iteam.task }}</p>
          </div>
          <div>
            <span>{{ iteam.fullDate }}, {{ iteam.date }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { taskData } from "../store/data";
const keyin = taskData();
const iteams = ref<any[]>(keyin.data.filter((iteam) => iteam.key === "keyin"));
watch(keyin.data, (newValue) => {
  iteams.value = newValue.filter((iteam) => iteam.key === "keyin");
});
</script>
<style scoped>
.task-keyin {
  font-size: 24px;
  font-weight: bolder;
  margin-bottom: 20px;
}

.keyin-box {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: start;
  font-size: smaller;
  font-weight: normal;
}

.keyin-box li {
  display: flex;
  justify-content: space-between;
  padding: 2%;
}

.box-iteam1 {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 60%;
}

li span {
  width: 70%;
  font-size: 16px;
}
input {
  width: 10%;
}
</style>
