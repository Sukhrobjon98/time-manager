<template>
  <div class="task-bugun">
    <h4>Bugun</h4>
    <div>
      <ul class="bugun-box">
        <li v-for="iteam in iteams" v-bind:key="iteam.id">
          <div class="box-iteam1">
            <input type="checkbox" />
            <p>{{ iteam.task }}</p>
          </div>
          <div>
            <span>{{ iteam.date }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { taskData } from "../store/data";
const bugun = taskData();
const iteams = ref<any[]>(bugun.data.filter((iteam) => iteam.key === "bugun"));
watch(bugun.data, (newValue) => {
  iteams.value = newValue.filter((iteam) => iteam.key === "bugun");
});
</script>
<style scoped>
.task-bugun {
  font-size: 24px;
  font-weight: bolder;
  margin-bottom: 20px;
}

.bugun-box {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: start;
  font-size: smaller;
  font-weight: normal;
}

.bugun-box li {
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
