const db = require("../models");


module.exports = {
    createCompany: function(req, res) {
        const { companyName, address, sector } = req.body;
        const { firstName, lastName, position, email, password } = req.body.user;
        
        const newCompany = {
            companyName: companyName,
            address: address,
            sector: sector
        };

        db.Company.create(newCompany)
        .then( ({ _id }) => {
            return db.User.create({
                firstName: firstName,
                lastName: lastName,
                position: position,
                email: email,
                password: password,
                admin: true,
                companyId: _id
            });
        })
        .then( (res) => res.json(res))
        .catch( (err) => res.status(422).json(err));
        // res.json(dbModel)
    },
    createUser: function(req, res) {
        const { companyName } = req.body;
        const { firstName, lastName, position, email, password } = req.body.user;
        console.log(companyName);

        db.Company.findOne({ companyName: companyName })
        .then( ({ _id }) => {
            return db.User.create({
                firstName: firstName,
                lastName: lastName,
                position: position,
                email: email,
                password: password,
                admin: false,
                companyId: _id
            });
        })
        .then( (res) => res.json(res))
        .catch( (err) => res.status(422).json(err));
    }
};

// @@add clear from and succes alerts error handlers.