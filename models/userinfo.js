
// Allows user info table to be created when user input their data
module.exports = function (sequelize, DataTypes) {
  let UserInfo = sequelize.define("UserInfo", { 
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
    
  });

  UserInfo.associate = function(models) {
    UserInfo.hasMany(models.Article, {
      onDelete: "cascade"
    });
  };

  return UserInfo;
};
