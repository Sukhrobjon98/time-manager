<template>
  <ul class="bugun-box">
    <li
      v-for="iteam in iteams"
      :key="iteam.id"
      :class="{
        checkbox: iteam.isDone === true,
      }"
    >
      <div class="box-iteam1">
        <input
          type="checkbox"
          @change="handleCheckbox(iteam.id)"
          v-model="iteam.isDone"
        />
        <p>{{ iteam.task }}</p>
      </div>
      <div>
        <p>{{ iteam.fullDate }} {{ iteam.date }}</p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { IErtaga } from "@/store/data";
import { taskData } from "@/store/data";
const props = defineProps({
  iteams: {
    type: Array as () => IErtaga[],
    required: true,
  },
});
const handleCheckbox = (id: string | number) => {
  let data = props.iteams.find((iteam) => iteam.id === id);

  taskData().updateTask({ ...data } as IErtaga);
};
</script>

<style scoped>
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

.box-list {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.bugun-box {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: start;
  font-size: smaller;
  font-weight: normal;
}

.checkbox {
  text-decoration: line-through;
  color: blue ;
}
</style>
