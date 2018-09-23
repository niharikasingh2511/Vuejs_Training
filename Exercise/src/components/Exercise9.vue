<template>
  <div class="Exercise9">
    <li>
      <router-link to="/">Return to Homepage</router-link>
    </li>
    <h1>{{msg}}</h1>

     <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <p>Exercise</p>
                <p>Build a Custom Directive which works like v-on (Listen for Events) which accepts a function as the parameter</p>
                <p>Eg - v-custom-on:click="function"</p>
                <!-- Hint - Think about native addEventListener -->

            <div class="custom-directive-container" v-custom-on:click="eventCallback">click me</div>
                <div class="custom-directive-container" v-custom-on:mouseover="eventCallback">hover over me</div>
                <hr />
                <div>You performed: {{ eventName }}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exercise9",
  data() {
    return {
      msg: "Excercise 9",
      eventName: ""
    };
  },
  methods: {
    eventCallback(event) {
    console.log('event.type',event.type);
      this.eventName = event.type;
    }
  }
};
</script>

<style>
h1,
h2 {
  font-weight: normal;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
  list-style: none;
}
a {
  color: #42b983;
}

.custom-directive-container {
  margin: 5px;
  padding: 5px;
  border: 5px solid #42b983;
  width: 500px;
  position: relative;
}
</style>
