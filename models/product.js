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
            allowNull: false
        },
        min_length: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        rate: {
            type: Datatypes.DOUBLE,
            allowNull: false
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