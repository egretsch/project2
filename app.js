const Sequelize = require('sequelize');
const connection = new Sequelize('userinfo', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',



  

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});



connection.sync();
  