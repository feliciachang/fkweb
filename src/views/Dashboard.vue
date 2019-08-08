<template>
  <div class="dashboard">
  <button v-on:click="logout">Log out</button>
    <h1> Dashboard </h1>
    <h1> {{this.user.name}} </h1>
  </div>
</template>

<script>
import FKApi from "../api/api";

export default {
  name: "dashboard",
  data: () => {
    return {user: {}}
  },
  async beforeCreate() {
      const api = new FKApi();
      if(api.authenticated()){
        this.user = await api.getCurrentUser();
      }
  },
  methods: {
    logout(){
      const api = new FKApi();
      api.logout();
      this.$router.push({name: "login"});
    }
  }
}
</script>
