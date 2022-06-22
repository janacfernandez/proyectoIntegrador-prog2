module.exports = function (sequelize, dataTypes) {

    let alias = 'Comment'

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        comentarios: {
            type: dataTypes.STRING
        },
        userId: {
            type: dataTypes.INTEGER,
        },
        productId: {
            type: dataTypes.INTEGER,
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
    }

    let config = {
        tableName: "comments",
        timestamps: true,
        underscored: false,
    }

    const Comment = sequelize.define(alias, cols, config);

    //Relación con productos 
    Comment.associate = function (models) {
        Comment.belongsTo(models.Product, {
            as: "product",
            foreignKey: "productId"
        })
        Comment.belongsTo(models.User, {
            as: "user",
            foreignKey: "userId"
        })
    }
    return Comment;
}