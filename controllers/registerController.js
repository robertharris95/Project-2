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
                companyId: _id,
                companyName: companyName
            });
        })
        .then( (data) => res.json(data))
        .catch( (err) => res.status(422).json(err));
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
                companyId: _id,
                companyName: companyName
            });
        })
        .then( (data) => res.json(data))
        .catch( (err) => res.status(422).json(err));
    },
    queryCompany: function(req, res) {
        db.Company.find({ companyName: { $regex: "/" + req.query.name + "/i" } })
        .then( (data) => res.json(data))
        .catch( (err) => res.status(422).json(err));
    },
    saveContract: function(req, res) {
        db.Contract.create(req.body)
        .then(data => res.json(data))
        .catch( (err) => res.status(422).json(err));
    },
    getContracts: function(req, res) {
        db.Contract.find()
        .then( (data) => res.json(data))
        .catch( (err) => res.status(422).json(err));
    },
    getCompanyUsers: function(req, res) {
        db.User.find({ companyId: req.query.id })
        .then( (data) => res.json(data))
        .catch( (err) => res.status(422).json(err));
    },
    getCompanyContracts: function(req, res) {
        db.Contract.find({ companyId: req.query.id })
        .then( (data) => res.json(data))
        .catch( (err) => res.status(422).json(err));
    }
};

// @@add clear from and succes alerts error handlers.