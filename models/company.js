module.exports = function(sequelize, Datatypes) {
    const Company = sequelize.define("Company", {
        name: Datatypes.STRING
    });

    Company.associate = function(models) {
        Company.hasMany(models.Product, {
            onDelete: "cascade"
        });
    };
    return Company;
};

// @@ Does company need associate to user? user already has associate @@
// DELETE THIS IF YOU KNOW. @@