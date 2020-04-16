const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contractSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    rate: { type: String, required: true },
    userId: { type: String, required: true },
    companyId: { type: String, required: true }
});

const Contract = mongoose.model("Contract", contractSchema);

module.exports = Contract;