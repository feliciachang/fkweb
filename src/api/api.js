import axios from "axios";


// import { BaseError } from "../common/errors";
// import { API_HOST } from "../secrets";
import TokenStorage from "./tokens";
// class APIError extends BaseError {}
// class AuthenticationError extends APIError {}

class FKApi {
  constructor() {
    this.baseUrl = "https://api.fkdev.org";
    this.tokens = new TokenStorage();
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
        return true;
      }
      else {
        throw new Error("Log In Failed")
      }
    }
  }
}

export default new FKApi;
