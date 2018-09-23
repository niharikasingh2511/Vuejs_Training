<template>
  <div class="Exercise7">
    <li>
      <router-link to="/">Return to Homepage</router-link>
    </li>
    <h1>{{msg}}</h1>

    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p> 1. Pass some text to the 3 components but not using props </p>
                <app-orange url="/data">Orange Template</app-orange>
                <app-black url="/data">Black Template</app-black>
                <app-red url="/data">Red Template</app-red>

                <p> 2. Dynamically switching the components using buttons </p>
                <br>
                <button class="btn btn-default" @click="setComponent('app-orange')">Load Orange Template</button>
                <button class="btn btn-default" @click="setComponent('app-black')">Load Black Template</button>
                <button class="btn btn-default" @click="setComponent('app-red')">Load Red Template</button>
                <hr>
            </div>
            <component :is="componentName" url="/data"></component>
        </div>
    </div>
  </div>
</template>

<script>
import Orange from "@/components/common/Orange.vue";
import Black from "@/components/common/Black.vue";
import Red from "@/components/common/Red.vue";

export default {
  name: "Exercise7",
  components: {
    appOrange: Orange,
    appBlack: Black,
    appRed: Red
  },
  data() {
    return {
      msg: "Excercise 7",

      selectedComponent: ""
    };
  },
  methods: {
    setComponent(name) {
      return (this.selectedComponent = name);
    }
  },
  computed: {
    componentName() {
      return this.selectedComponent;
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
</style>
