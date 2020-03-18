module.exports = function(sequelize, Datatypes) {
    const Product = sequelize.define("Product", {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: Datatypes.TEXT,
            allowNull: false,
            validate: {
                len: [20]
            }
        },
        quantity: {
                type: Datatypes.INTEGER,
                allowNull: true,
                validate: {
                len: [1]
                }
        },
        category: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Product.associate = function(models) {
        Product.belongsTo(models.Company, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Product;
};