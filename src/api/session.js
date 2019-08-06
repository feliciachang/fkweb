import TokenStorage from "./tokens";
import FKApi from "./api";

//also then need a get request that authenticates you

export default class UserSession {
  constructor() {
    this.tokens = new TokenStorage();
  }

  authenticated() {
    return this.tokens.authenticated();
  }

  async login(email, password) {
    try {
      console.log("calledLoginfunction");
      await FKApi.login(email, password);

      return true;
    } catch (err) {
      return null;
    }
  }

  async logout() {
    this.tokens.clear();
  }
}
