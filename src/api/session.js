import TokenStorage from "./tokens";
import FKApi from "./api";

//also then need a get request that authenticates you

export default class UserSession {
  constructor() {
    this.tokens = new TokenStorage();
  }

  async authenticated() {
    const user = await FKApi.authenticated();
    return user;
  }

  async getCurrentUser() {
    const user = await FKApi.getCurrentUser();
    return user;
  }

  async login(email, password) {
    try {
      const auth = await FKApi.login(email, password);
      this.tokens.setToken(user);
      return auth;
    } catch (err) {
      return null;
    }
  }
  //
  // async logout() {
  //   this.tokens.clear();
  // }
}
