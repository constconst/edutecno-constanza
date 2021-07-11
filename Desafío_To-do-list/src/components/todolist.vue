<template>
    <div class="col s12 m6">
        <div class="card medium yellow lighten-2">
            <div class="card-content">
                <span class="card-title">Quehaceres</span>
            <!-- INPUT -->
                <div class="form">
                    <!-- v-model creates a two-way binding on a form input element or a component.-->
                    <!-- @keyup.enter sirve para que funcione el enter y reemplace al @click -->
                    <input v-model="task" type="text" class="form-control" @keyup.enter="submitTask">
                    <!-- otro tipo de v-on:click -->
                    <button @click="submitTask" class="btn waves-effect yellow lighten-5 blue-text text-darken-2" type="submit" name="action">Anotar
                        <i class="fas fa-seedling"></i>
                    </button>
                </div>

                <!-- TABLA -->
                <table class="highlight table">
                    <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Estado</th>
                        <th></th>
                        <th></th>

                    </tr>
                    </thead>

                    <tbody>
                        <!-- Tenemos que especificar de dónde viene el data -->
                        <!-- Cuando se usa un v-for, se recomienda usar un :key -->
                    <tr v-for="(task, index) in tasks" :key="index">
                        <!-- if ternario // en una línea -->
                        <!-- <td :class="`${task.checked?'crossed':''}`">{{task.name}}</td> -->
                        <!-- if con && que me va a servir en el futuro. Si checked es verdadero, me
                        va a imprimir crossed. -->
                        <td :class="`${task.checked&&'crossed'}`">{{task.name}}</td>
                        <td>
                            <label>
                                <input id="checkbox" type="checkbox" v-model="task.checked" />
                                <span ></span>
                                <label for="checkbox"></label>
                            </label>
                        </td>
                        <td>
                            <div>
                                <span v-on:click="deleteTask(index)" class="fa fa-trash"></span>
                            </div>
                        </td>
                        
                    </tr>
                    </tbody>
                </table>       
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'TodoList',
        props: {
            msg: String,
        },
        data() {            
            return {
                task: '',
                tasks: [],
                checked: '',
            }
        },
        methods: {
            submitTask(){
                // por si no hay nada en el texto
                if(this.task.length === 0) return;
                this.tasks.push({
                    name: this.task,
                    checked: false, 
                })
                // Para borrar el texto que queda en el input
                this.task= '';
            },
            deleteTask(index){
                this.tasks.splice(index, 1);
            }
        }    
    };
</script>

<style scoped>
    .form {
        display:flex;
    }
    .crossed {
        text-decoration: line-through;
    }
</style>


