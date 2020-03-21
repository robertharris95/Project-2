module.exports = function(sequelize, Datatypes) {
    const Product = sequelize.define("Product", {
        product_name: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^[a-zA-Z0-9 -]+$/i,
                    msg: "Please enter a valid name for your product. No special characters allowed."
                }
            }
        },
        product_description: {
            type: Datatypes.TEXT,
            allowNull: false,
            validate: {
                len: {
                    args: [25,300],
                    msg: "Please enter a valid description of atleast 25 characters, maximum 300."
                }
            }
        },
        quantity: {
            type: Datatypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: {
                    args: true,
                    msg: "Please enter a valid numeric quantity."
                }
            }
        },
        min_length: {
            type: Datatypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: {
                    args: true,
                    msg: "Please enter a valid numeric quantity."
                }
            }
        },
        min_lengthUnits: {
            type: Datatypes.STRING,
            allowNull: false
        },
        rate: {
            type: Datatypes.DOUBLE,
            allowNull: false,
            validate: {
                isNumeric: {
                    args: true,
                    msg: "Please enter a valid numeric quantity."
                },
                min: {
                    args: 1,
                    msg: "Please enter a valid rate greater than zero."
                }
            }
        },
        category: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: {
                    args: true,
                    msg: "Please enter a valid category. No special characters or numbers."
                }
            }
        },
        contract: {
            type: Datatypes.STRING,
            allowNull: true,
            validate: {
                isUrl: {
                    args: true,
                    msg: "Please provide a valid link to your contract. Ex. http://validlink.com"
                }
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