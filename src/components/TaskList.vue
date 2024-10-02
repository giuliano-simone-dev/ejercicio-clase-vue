<template>
    <div class="grid">
    <h2>Lista de tareas</h2>
      <ul>
        <li v-for="(task, index) in tasks" :key="index" :style="{color:task.textColor, backgroundColor: task.backgroundColor}">
          {{ task.taskName }}
          <button @click="deleteTask(index)" :style="{backgroundColor:task.buttonColor}">Eliminar</button>
        </li>
      </ul>
    </div>
  </template>

<script>
import TaskService from '../services/TaskServices';
export default{
    data(){
        return{
            tasks: [],
        }
    },
    created(){
        this.tasks = TaskService.getTasks();
    },
    methods:{
        /**
         * 
         * @param {number} index 
         * @returns {void}
         */
        deleteTask(index){
            try{
                TaskService.deleteTask(index);
                this.tasks = TaskService.getTasks();
            }catch(error){
                console.log(error);
            }
           
        }
    }
}
</script>

<style> 
    ul{
        list-style-type: none;
        display: block;
        margin: 0 auto; /* Centra el ul horizontalmente */
        padding: 0;
        width: 50%;
    }
    li{ 
      margin: 2.5% auto; /* Centra cada li horizontalmente */
      padding: 5%;
      width: 90%; /* Ajusta el ancho del li para que no exceda el ul */
      border: 5px solid #333333;
      border-radius: 10px;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      box-sizing: border-box;
    }
    button{
        margin-left: 10px;
    }
    .grid{
      display: grid; 
      justify-items: center;
      text-align: center;
    }
</style>