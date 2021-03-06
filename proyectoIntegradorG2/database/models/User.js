module.exports = function (sequelize, dataTypes) {

    let alias = 'User';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        fDeNac: {
            type: dataTypes.DATE,
        },
        dni: {
            type: dataTypes.INTEGER
        },
        foto: {
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
    }

    let config = {
        tableName: "users",
        timestamps: true,
        underscored: false,
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models){
        User.hasMany(models.Comment, {
            as: "comment",
            foreignKey: "userId"
        })
        User.belongsToMany(models.User, {
            as: "seguidores",
            through: "followers",/*nombre de la tabla pivot*/
            foreignKey: "seguido",
            otherKey: "seguidor",
            timestamps: false
        })
        User.hasMany(models.Product, {
            as: "product",
            foreignKey: "userId",
        })
    };

    return User;
}