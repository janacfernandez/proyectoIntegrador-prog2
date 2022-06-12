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
        img:{
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
        producto_id: { // ver esto //
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "comentarios",
        timestamps: true, 
        underscored: false,
    };

    const Comentario = sequelize.define(alias, cols, config);


    //Relación con productos VER
    Comentario.associate = function (models) { 
        Comentario.belongsTo(models.Product, {
            as: "productos",
            foreignKey: "producto_id"
        })
    };

    //Relación con usuarios VER
    Comentario.associate = function (models) { 
        Comentario.belongsTo(models.User, {
            as: "usuarios",
            foreignKey: "usuario_id"
        })
    }; 

    return Comentario;
}