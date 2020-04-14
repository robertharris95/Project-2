const db = require("../models");

module.exports = {
    createCompany: function(req, res) {
        db.Company
            .create(req.body)
            .then( (dbModel) => res.json(dbModel))
            .catch( (err) => res.status(422).json(err));
    }
};