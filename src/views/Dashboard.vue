<template>
  <div class="dashboard">
    <h1> Dashboard </h1>
    <h1> {{user.name}} </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "dashboard",
  props: {
    user: {}
  },
  components: {
    HelloWorld
  }
};
</script>
