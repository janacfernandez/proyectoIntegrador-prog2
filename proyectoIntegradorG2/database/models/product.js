module.exports = function (sequelize, dataTypes) {

    let alias = 'Product';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        img: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        anio: {
            type: dataTypes.INTEGER
        },
        comentarios: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        deletedAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        userId: {
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName: "products",
        timestamps: true,
        underscored: false,
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.User, {
            as: "user",
            foreignKey: "userId"
        }),
            Product.hasMany(models.Comment, {
                as: "comment",
                foreignKey: "productId"
            })
    };

    return Product;
}