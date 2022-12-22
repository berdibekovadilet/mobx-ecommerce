import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";

export class LoginStore {
  loginToken: string = "";
  constructor() {
    makeObservable(this, {
      loginToken: observable,
      fetchUserToken: action,
      getUserToken: computed,
    });
  }
  logout() {
    this.loginToken = "";
  }
  async fetchUserToken(userName: string, password: string) {
    const data = {
      username: userName,
      password: password,
    };

    const tokenRes = await axios.post(
      "https://fakestoreapi.com/auth/login",
      data
    );
    this.loginToken = tokenRes.data.token;
  }
  get getUserToken() {
    return this.loginToken;
  }
}