<template>
    <div id="app">
        <TodoList></TodoList>
    </div>
</template>

<script>
import TodoList from './components/todolist.vue';
export default {
    name: 'App',
    components: {
        TodoList
    }
}

</script>
