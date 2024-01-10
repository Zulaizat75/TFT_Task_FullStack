<template>
  <div id="app">
    <h1>Task Adder App</h1>
    <input placeholder="Add todo" @keyup.enter="addTodo" v-model="newTodo" /> <br>
    <!-- Add a button to name "add task" -->
    <button @click="addTodo">Add Task</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return{
      newTodo: "",
      todos: [],
    };
  },
  methods:{
    addTodo(){
      if(this.newTodo.trim() !== ""){
        this.todos.push(this.newTodo.trim());
        this.newTodo = "";
      }
    },
  },
};
</script>

<!-- code css -->
<style>
body{
  background-color: bisque;
}
#app {
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: white;
}
input {
  padding: 1rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  width: 60%;
  border-radius: 0.25rem;
}
button{
  padding: 1rem;
  font-size: 1rem;  
  border-radius: 0.25rem;
}
button:hover{
  cursor: pointer;
  background-color: azure;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}
li button:hover{
  background-color: bisque;
}
</style>
