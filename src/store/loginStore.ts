import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";

export class LoginStore {
  loginToken: string = "";
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      loginToken: observable,
      fetchUserToken: action,
      getUserToken: computed,
    });
    this.rootStore = rootStore;
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
