import axios from "axios";


// import { BaseError } from "../common/errors";
// import { API_HOST } from "../secrets";
import TokenStorage from "./tokens";
// class APIError extends BaseError {}
// class AuthenticationError extends APIError {}


class FKApi {
  constructor() {
    this.baseUrl = "https://api.fkdev.org";
    this.token = new TokenStorage();
    this.handleResponse = this.handleResponse.bind(this);
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
    }).then(this.handleResponse);
  }

  handleResponse(response){
    try {
      console.log("login function response", response);
       if(response.status == 204){
         this.token.setToken(response.headers.authorization);
         return response.headers.authorization;
       }
       else {
         return null;
         throw new Error("Log In Failed")
       }

    }
    catch (err) {
      console.log("error");
      console.log(err);
    }
  }

  authenticated (){
    if(this.token.authenticated()){
      return true;
    }
    else{
      return false;
    }
  }

  getCurrentUser() {
    const token = this.token.getToken();
    return axios({
      method: "GET",
      url: this.baseUrl + "/user",
      headers: {"Content-Type": "application/json", Authorization: token},
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
