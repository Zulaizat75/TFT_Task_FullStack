<template>
  <MyForm />
</template>

<script>
import MyForm from './components/MyForm'
export default {
  name: 'App',
  components: {
    MyForm,
  }
}
</script>

<style>
#app {
  background-color: aliceblue;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  margin: auto;
  margin-top: 50px;
}

form {
  display: grid;
  gap: 10px;
}

label {
  font-weight: bold;
}

input, button {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid beige;
  border-radius: 5px;
}

button {
  background-color: seagreen;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: darkgreen;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid beige;
}

th {
  background-color: bisque;
}

</style>