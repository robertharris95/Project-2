import axios from "axios";

export default {
    registerCompany: function(data) {
        return axios.post("/api/register", data);
    }
}