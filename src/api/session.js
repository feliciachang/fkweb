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

  async getCurrentUser() {
    const user = await FKApi.getCurrentUser();
    return user;
  }

  async login(email, password) {
    try {
      const auth = await FKApi.login(email, password);
      this.tokens.setToken(auth);
      return auth;
    } catch (err) {
      return null;
    }
  }

  async logout() {
    this.tokens.clear();
  }
}
