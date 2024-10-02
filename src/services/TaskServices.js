class TaskService {

    /**
     * @typedef {Object} Task
     * @property {string} taskName
     * @property {string} backgroundColor
     * @property {string} textColor
     * @property {string} buttonColor
     */
    constructor(){
        /**
         * @type {Task[]}
         */
        this.task = [];
    }

    /**
     * @param {Task} task
     * @returns {TaskService}
     */
    addTask(task){

        if(!task.taskName || task.taskName.trim() === '') throw new Error('Task es requerido');
        
        this.task.push(task);
        return this;
    }

    /**
     * @param {number} index
     * @returns {TaskService}
     */
    deleteTask(index){
        if(index < 0 || index >= this.task.length) throw new Error('Index fuera de rango');
        this.task.splice(index, 1);
        return this;
    }

    /**
     * @returns {Task[]}
     */
    getTasks(){
        return this.task;
    }
}

export default new TaskService();