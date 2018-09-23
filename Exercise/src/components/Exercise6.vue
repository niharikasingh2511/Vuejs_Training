<template>
  <div class="Exercise6">
    <li>
      <router-link to="/">Return to Homepage</router-link>
    </li>
    <h1>{{msg}}</h1>

    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Project Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                        class="list-group-item"
                        v-for="index in 5"
                        v-bind:key="index"
                        v-on:click="setProject(index)">
                        Project #{{ index }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <ProjectDetails :projectIndex= "projectIndex"/>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Project are managed here</p>
                </footer>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ProjectDetails from "./projectDetails.vue";

export default {
  name: "Exercise6",
  components: { ProjectDetails },
  data() {
    return {
      msg: "Excercise 6",
      projectIndex: -1
    };
  },
  methods: {
    setProject(index) {
      this.projectIndex = index;
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
.list-group-item {
  cursor: pointer;
  margin: 10px 0px;
}
a {
  color: #42b983;
}
</style>
