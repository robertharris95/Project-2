import axios from "axios";

export default {
    registerCompany: function(data) {
        return axios.post("/api/register/company", data);
    },
    registerUser: function(data) {
        return axios.post("/api/register/user", data);
    },
    signIn: function(data) {
        return axios.post("/api/login", data);
    },
    getUser: function() {
        return axios.get("/api/user_data");
    },
    getCompanyList: function(data) {
        return axios.get("/api/company?name=" + data);
    },
    saveContract: function(data) {
        return axios.post("/api/company", data);
    },
    getContracts: function() {
        return axios.get("/api/contract_data");
    },
    getMyUsers: function(data) {
        return axios.get("/api/my_users?id=" + data);
    },
    removeUser: function(data) {
        return axios.delete("/api/my_users/" + data);
    }, 
    getMyContracts: function(data) {
        return axios.get("/api/my_contracts?id=" + data);
    },
    removeContract: function(data) {
        return axios.delete("/api/my_contracts/" + data);
    },
    logOut: function() {
        return axios.get("/logout");
    }
}