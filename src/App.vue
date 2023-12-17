<template>
  <div class="main-page">
    <div class="head-page">
      <div class="head-div1">
        <h1 class="head-title">Vazifalar Menedjeri</h1>
      </div>
      <div class="head-div2">
        <TaskInput />
      </div>
      <TaskBugun />
      <TaskErtaga />
      <TaskKeyin />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TaskInput from "./components/TaskInput.vue";
import TaskBugun from "./components/TaskBugun.vue";
import TaskErtaga from "./components/TaskErtaga.vue";
import TaskKeyin from "./components/TaskKeyin.vue";
</script>
<style>
.head-page {
  width: 30%;
  height: 90%;
  border: 2px solid #000;
  margin: 0 auto;
  padding: 12px 14px;
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
}
.head-div1,
.head-div2 {
  padding-bottom: 30px;
}
</style>
