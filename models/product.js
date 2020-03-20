module.exports = function(sequelize, Datatypes) {
    const Product = sequelize.define("Product", {
        product_name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        product_description: {
            type: Datatypes.TEXT,
            allowNull: false
        },
        quantity: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        min_length: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        min_lengthUnits: {
            type: Datatypes.STRING,
            allowNull: false
        },
        rate: {
            type: Datatypes.DOUBLE,
            allowNull: false
        },
        category: {
            type: Datatypes.STRING,
            allowNull: false
        },
        contract: {
            type: Datatypes.STRING,
            allowNull: true
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