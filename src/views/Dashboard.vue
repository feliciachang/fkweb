<template>
  <div class="dashboard">
    <h1> Dashboard </h1>
    <h1> {{this.user.name}} </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import UserSession from "../api/session";

export default {
  name: "dashboard",
  data: () => {
    return {user: {}}
  },
  async beforeCreate() {
      const userSession = new UserSession();
      if(userSession.authenticated()){
        this.user = await userSession.getCurrentUser();
        console.log(this.user.name);
      }
  }
}
</script>
