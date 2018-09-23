<template>
    <div>
      <a v-bind:href="componentData"></a>
      <slot></slot>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        componentData: ''
      }
    }
  }
</script>

<style scoped>
div {
  border: 1px solid black;
  background-color: gray;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>
