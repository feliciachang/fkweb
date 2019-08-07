import axios from "axios";


// import { BaseError } from "../common/errors";
// import { API_HOST } from "../secrets";
import TokenStorage from "./tokens";
// class APIError extends BaseError {}
// class AuthenticationError extends APIError {}

let accessToken = null;

class FKApi {
  constructor() {
    this.baseUrl = "https://api.fkdev.org";
  }

  login(email, password) {
    return axios({
      method: "POST",
      url: this.baseUrl + "/login",
      headers: {"Content-Type": "application/json"},
      data: {
        email: email,
        password: password
      }
    }).then(handleResponse);

    function handleResponse(response){
      if(response.status == 204){
        accessToken = response.headers.authorization;
        return response.headers.authorization;
      }
      else {
        throw new Error("Log In Failed")
      }
    }
  }

  isLoggedIn() {
    return accessToken;
  }

  getCurrentUser() {
    return axios({
      method: "GET",
      url: this.baseUrl + "/user",
      headers: {"Content-Type": "application/json", Authorization: accessToken},
    }).then(handleResponse);

    function handleResponse(response){
      if(response.status == 200){
        return response.data;
      }
      else {
        throw new Error("Get user Failed")
      }
    }
  }
}

export default new FKApi;
