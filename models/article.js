module.exports = function(sequelize, DataTypes) {
    var Article = sequelize.define("Article", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      snippet: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
<<<<<<< HEAD
      }
    });
=======
      },
      UserInfoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

    });

    Article.associate = function(models) {
      Article.belongsTo(models.UserInfo, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  

>>>>>>> 3ebe50734b603e9380fa4a4479dc9f32c225f4c7
    return Article;
  };