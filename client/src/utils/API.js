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
    }
}