const Sequelize = require('sequelize');
const connection = new Sequelize('userinfo', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',



  

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const Login = connection.define("login", {
  title: Sequelize.STRING,
  content: Sequelize.STRING
});

connection.sync();
  