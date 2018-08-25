module.exports = function (sequelize, DataTypes) {
<<<<<<< HEAD
  var UserInfo = sequelize.define("UserInfo", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true

    }, 
=======
  var UserInfo = sequelize.define("UserInfo", { 
>>>>>>> 3ebe50734b603e9380fa4a4479dc9f32c225f4c7
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
<<<<<<< HEAD
=======

  UserInfo.associate = function(models) {
    UserInfo.hasMany(models.Article, {
      onDelete: "cascade"
    });
  };

>>>>>>> 3ebe50734b603e9380fa4a4479dc9f32c225f4c7
  return UserInfo;
};
