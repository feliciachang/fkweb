<template>
  <div class="dashboard">
  <button v-on:click="logout">Log out</button>
    <h1> Dashboard </h1>
    <h1> {{this.user.name}} </h1>

    <ol>
      <li v-for="station in stations.stations">
      Name: {{station.name}}
      </li>
    </ol>
  </div>
</template>

<script>
import FKApi from "../api/api";

export default {
  name: "dashboard",
  data: () => {
    return {user: {}, stations: {}}
  },
  async beforeCreate() {
      const api = new FKApi();
      if(api.authenticated()){
        this.user = await api.getCurrentUser();
        this.stations = await api.getStations();
        console.log("this is the user info", this.user);
        console.log("this is the station info", this.stations);
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
