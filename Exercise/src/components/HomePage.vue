<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/Exercise6">Exercise - 6</router-link>
      </li>
      <li>
        <router-link to="/Exercise7">Exercise - 7</router-link>
      </li>
      <li>
        <router-link to="/Exercise8">Exercise - 8</router-link>
      </li>
      <li>
        <router-link to="/Exercise9">Exercise - 9</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      msg: "Vue.js training exercises"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
