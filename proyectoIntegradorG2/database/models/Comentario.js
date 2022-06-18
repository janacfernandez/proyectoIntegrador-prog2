module.exports = function (sequelize, dataTypes){
    
    let alias = 'Comentario';

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
        }
    }

    let config = {
        tableName: "comments",
        timestamps: true, 
        underscored: false,
    };

    const Comentario = sequelize.define(alias, cols, config);

    //Relación con productos 
Comentario.associate = function (models) { 
    Comentario.belongsTo(models.Product, {
        as: "product",
        foreignKey: "productId"
    })
};

//Relación con usuarios 
Comentario.associate = function (models) { 
    Comentario.belongsTo(models.User, {
        as: "user",
        foreignKey: "userId"
    })
}; 

    return Comentario;
}
