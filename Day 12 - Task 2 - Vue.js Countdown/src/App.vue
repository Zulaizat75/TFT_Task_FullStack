<template>
  <div id="app">
    <h1>Countdown app</h1>
    <label> Set countdown (in seconds)</label>
    <input type="number" id="duration" v-model="duration" min="1" />
    <button @click="startCountdown()" :disabled="counting">Start</button>

    <!-- Add hours in countdown app -->
    <div v-if="counting">
      <h2>Time Remaining</h2>
      <p>{{ hours }} : {{ minutes }} : {{ seconds }}</p>
    </div>

    <div>
      <h2 v-if="countdownComplete">Countdown Complete</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return{
      duration: 0,
      counting: false,
      hours: 0,
      minutes: 0,
      seconds: 0,
      countdownComplete: false,
      intervalid: null,
    }
  },
  methods: {
    startCountdown() {
      if (this.duration > 0 && !this.counting){
        this.counting = true;
        this.intervalid = setInterval(()=>{
          if(this.duration > 0){
            this.duration--
            this.calculateTime();
          }
          else{
            clearInterval(this.intervalid);
            this.counting = false;
            this.countdownComplete = true;
          }
        }, 1000);
      }
    },

    // calculation for hours, minutes and seconds
    calculateTime(){
      this.hours = Math.floor(this.duration / 3600);
      this.minutes = Math.floor((this.duration % 3600) / 60);
      this.seconds = Math.floor((this.duration % 3600) % 60);

      if(this.minutes > 59){
        this.minutes %= 59;
      }
    }
  },
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 1rem;
}

input {
  padding: 10px;
  font-size: 16px;
  margin-bottom: 1rem;
}

button {
  padding: 10px;
  font-size: 16px;
  margin-left: 1rem;
  background-color: bisque;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
}

#countdown-message {
  font-size: 1.5rem;
  color: azure;
  margin-top: 1rem;
}
</style>
