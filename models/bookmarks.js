
// Allows database to be created for bookmarked articles for each user
module.exports = function(sequelize, DataTypes) {
    let Bookmark = sequelize.define("Bookmark", {
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
      link: {
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
      }

    });

    Bookmark.associate = function(models) {
    Bookmark.belongsTo(models.UserInfo, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  

    return Bookmark;
  };
