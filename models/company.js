module.exports = function(sequelize, Datatypes) {
    const Company = sequelize.define("Company", {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: {
                    args: /^[a-zA-Z0-9 .]+/i,
                    msg: "Please enter a valid name for your company. No special characters allowed."
                }
            }
        }
    });

    Company.associate = function(models) {
        Company.hasMany(models.Product, {
            onDelete: "cascade"
        });
    };
    return Company;
};