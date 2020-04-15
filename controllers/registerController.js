const db = require("../models");
const bcrypt = require("bcryptjs");


module.exports = {
    createCompany: function(req, res) {
        const { companyName, address, sector } = req.body;
        const { firstName, lastName, position, email, password } = req.body.user;
        
        const newCompany = {
            companyName: companyName,
            address: address,
            sector: sector
        };

        const hashedPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);

        db.Company.create(newCompany)
        .then( ({ _id }) => {
            return db.User.create({
                firstName: firstName,
                lastName: lastName,
                position: position,
                email: email,
                password: hashedPass,
                admin: true,
                companyId: _id
            });
        })
        .then( (res) => res.redirect(307, "/api/login"))
        .catch( (err) => res.status(422).json(err));
        // res.json(dbModel)
    },
    createUser: function(req, res) {
        const { companyName } = req.body;
        const { firstName, lastName, position, email, password } = req.body.user;
        
        const hashedPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);

        db.Company.findOne({ companyName: companyName })
        .then( ({ _id }) => {
            return db.User.create({
                firstName: firstName,
                lastName: lastName,
                position: position,
                email: email,
                password: hashedPass,
                admin: false,
                companyId: _id
            });
        })
        .then( (res) => res.redirect(307, "/api/login"))
        .catch( (err) => res.status(422).json(err));
    }
};

// @@add clear from and succes alerts error handlers.