const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type:DataTypes.INTEGER,
         primaryKey:true,
         allowNull:false
      },
      name:{
         type:DataTypes.STRING,
         allowNull:false
      },
      status:{
         type:DataTypes.ENUM(`Alive`,`Dead`,`unknown`)
      },
      species:{
         type:DataTypes.STRING,
         allowNull:false
      },
      origin:{
         type:DataTypes.STRING,
         allowNull:false
      },
      image:{
         type:DataTypes.STRING,
         allowNull:false

      },
      gender:{
         type:DataTypes.STRING,
         validate:{
            isIn:[["Male","Female", "unknown","Genderless"]]
         }
      }
   }, { timestamps: false });
};
