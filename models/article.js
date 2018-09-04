// Allows page 2 create a database for articles

module.exports = function(sequelize, DataTypes) {
    let Article = sequelize.define("Article", {
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
  

    return Article;
  };
