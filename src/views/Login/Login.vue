<template>
  <div id="app">
    <img
      v-bind:style="{
        maxWidth: '30%',
        marginTop: '50px',
        marginBottom: '80px'
      }"
      alt="Fieldkit Logo"
      src="../../assets/FieldKit_Logo_White.png"
    />
    <br />
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>

<style>
html,
body {
  width: 100%;
  min-height: 100%;
}
body {
  background-image: linear-gradient(#52b5e4, #1b80c9);
}
</style>
