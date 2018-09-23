<template>
    <div>
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input  v-model="value.firstName"
              type="text"
              id="firstName"
              class="form-control">
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input v-model="value.lastName"
              type="text"
              id="lastName"
              class="form-control">
        </div>
    </div>
</template>

<script>
export default {
  name: "FullName",
  props: ["value"]
};
</script>

<style>
</style>
