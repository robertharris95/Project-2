const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
    companyName: { type: String, required: true },
    address: { type: String, required: true },
    sector: { type: String, required: true },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;