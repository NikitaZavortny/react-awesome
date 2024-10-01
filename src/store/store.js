import { makeAutoObservable } from "mobx";
import AuthService from "../API/AuthService";
import axios from 'axios';
import $api, { API_URL } from "../http";

export default class Store {
    user = {};
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(username, password) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response.data.result);
            if (response.data.result != 431) {
                console.log("you are in")
                localStorage.setItem('token', response.data.access_token);
                this.setAuth(true);
                console.log(this.isAuth);
                this.setUser(response.data.user);
                return;
            }
            console.log("wrong");
            return 'nope';
        } catch (e) {
            console.log(e.response?.data?.message);
            return 'nope';
        }
    }

    async registration(email, username, password) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            return 'nope';
        } catch (e) {
            console.log(e.response?.data?.message);
            return 'nope';
        }
    }

    async logout() {
        try {
            localStorage.removeItem('token');

            this.setAuth(false);
            const response = await AuthService.logout();

            this.setUser({});
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
            if (response.data.result != 431) {
                console.log(response);
                localStorage.setItem('token', response.data.access_token);
                this.setAuth(true);
                this.setUser(response.data.user);
            }
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}