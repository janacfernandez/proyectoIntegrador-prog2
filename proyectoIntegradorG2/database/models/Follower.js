module.exports = function (sequelize, dataTypes){
    
    let alias = 'Follower';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        seguidor: {
            type: dataTypes.INTEGER
        },
        seguido: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "followers",
        timestamps: true,
        underscored: false,
    };
    const Follower = sequelize.define(alias, cols, config)
return Follower
}
