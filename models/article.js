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
      }

    });
    return Article;
  };