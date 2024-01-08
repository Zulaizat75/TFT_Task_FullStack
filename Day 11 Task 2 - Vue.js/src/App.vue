<!-- Fetch the API data from any website -->
<!-- Fetching API from https://reqres.in/api/users -->
<template>
  <div>
    <h1>Api Fetching Data</h1>
    <h2>(https://reqres.in/api/users)</h2>
    <div class="item-container">
      <div v-for="item in list" :key="item.id">
        <ul class="item">
          <li>{{ item.id }}</li>
          <li>{{ item.email }}</li>
          <li>{{ item.first_name }}</li>
          <li>{{ item.last_name }}</li>
          <li><img :src="item.avatar"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// install axios "npm i vue-axios"
import axios from 'axios';

export default {
  name: 'App',
  components: {

  },
  // Show data in list
  data() {
    return {
      list: []
    }
  },

  async mounted() {
    let result = await axios.get("https://reqres.in/api/users");
    console.warn(result.data.data);
    this.list = result.data.data;
  },
}
</script>

<!-- // CSS Files -->
<style>
  body {
    background-color: beige;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    text-align: center;
    color: black;
  }
  h2 {
    text-align: center;
    color: black;
  }
  /* css to allow items to wrap onto next line */
  .item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .item {
    list-style-type: none;
    background-color: aliceblue;
    border: 1px solid black;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    width: 350px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  ul{
    padding: 0;
    margin: 0;
  }
  li {
    margin: 5px;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
</style>

