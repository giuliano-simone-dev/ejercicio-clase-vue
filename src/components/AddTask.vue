<template>
    <div>
      <h2>Añadir tarea</h2>
      <input type="text" v-model="taskName" placeholder="Agrega una nueva tarea">
      <div class="color-picker">
        <!-- Estos campos ya no tienen sentido en TaskList ya que son parte de la nueva Task -->
        <label for="color-bg-input">Color de Fondo</label>
        <input type="color" id="color-bg-input" v-model="backgroundColor">
        <label for="color-txt-input">Color de texto</label>
        <input type="color" id="color-txt-input" v-model="textColor">
        <label for="color-btn-input">Color de botón</label>
        <input type="color" id="color-btn-input" v-model="buttonColor">
      </div>
      <button @click="addTask">Agregar</button>
    </div>
  </template>

<script>
import TaskService from '../services/TaskServices';
export default{
    data(){
        return{
            taskName: '',
            backgroundColor: '#ffffff',
            textColor: '#333333',
            buttonColor: '#eeeeee'
        }
    },
    methods:{
        initVars(){
            this.taskName = '';
            this.backgroundColor = '#ffffff';
            this.textColor = '#333333';
            this.buttonColor = '#eeeeee';
            this.newTask = {};
        },
        addTask(){
            try{
                TaskService.addTask({
                    taskName: this.taskName,
                    backgroundColor: this.backgroundColor,
                    textColor: this.textColor,
                    buttonColor: this.buttonColor
                });
                console.log({TaskService});
                this.initVars();
                this.$emit('task-added');
            }catch(error){
                console.log(error.message);
            }
    }
}
}
</script>