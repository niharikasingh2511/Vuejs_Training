<template>
    <div class="container">
        <div class="col-md-12">
          <p v-if="projectIndex > 0">Project details for Project - {{projectIndex}}</p>
          <p v-else>Details for this project are available. Try another one!!</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "ProjectDetails",
  props: ["projectIndex"]
};
</script>
