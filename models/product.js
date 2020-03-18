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
                len: [50]
            }
        },
        quantity: {
            weekly: {
                type: Datatypes.INTEGER,
                allowNull: true
            },
            monthly: {
                type: Datatypes.INTEGER,
                allowNull: true
            },
            yearly: {
                type: Datatypes.INTEGER,
                allowNull: true
            },
            validate: {
                len: [1]
            }
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