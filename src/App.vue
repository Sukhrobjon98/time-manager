<template>
  <div class="main-page">
    <div class="head-page">
      <div class="head-div1">
        <h1 class="head-title">Vazifalar Menedjeri</h1>
      </div>
      <div class="head-div2">
        <div>
          <TaskInput />
          <TaskBugun />
          <TaskErtaga />
          <TaskKeyin />
        </div>
        <div class="task-title">
          <TaskTitle />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TaskInput from "./components/TaskInput.vue";
import TaskBugun from "./components/TaskBugun.vue";
import TaskErtaga from "./components/TaskErtaga.vue";
import TaskKeyin from "./components/TaskKeyin.vue";
import TaskTitle from "./components/TaskTitle.vue";
</script>
<style>
.head-page {
  width: 30%;
  height: 90%;
  border: 2px solid #000;
  margin: 0 auto;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll  ;
}
.main-page {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.head-title {
  margin: 0;
  text-align: center;
  margin-bottom: 35px;
}
.head-div2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
}

.task-title {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 20px;
  font-size: 14px;
}
</style>
