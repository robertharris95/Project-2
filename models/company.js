module.exports = function(sequelize, Datatypes) {
    const Company = sequelize.define("Company", {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    Company.associate = function(models) {
        Company.hasMany(models.Product, {
            onDelete: "cascade"
        });
    };
    return Company;
};