<template>
  <div id="app">
    <AddTask @task-added="updateTaskList"/>
    <TaskList ref="taskList"/>
  </div>
</template>

<script>

import AddTask from './components/AddTask.vue'
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  components: {
    AddTask,
    TaskList
  },
  methods: {
    updateTaskList(){
      this.$refs.taskList.tasks = this.$refs.taskList.task = this.$refs.taskList.$options.methods.created.call(this.$refs.taskList);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
  padding: 0;
}
</style>
