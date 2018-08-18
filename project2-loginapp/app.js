const Sequelize = require('sequelize');
const connection = new Sequelize('user_schema', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const Login = connection.define("login", {
    title: Sequelize.STRING,
    content: Sequelize.STRING
    });

connection.sync();
  