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
                console.log("id", _id);
                console.log("firstName", firstName);
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
    }
};

// @@add clear from and succes alerts error handlers.