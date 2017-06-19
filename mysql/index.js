'use strict'

const Sequelize = require('Sequelize')

const sequelize = new Sequelize('todo_dev', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

module.exports = sequelize

module.exports.Roles = require('./models/Roles')(sequelize, Sequelize.DataTypes)
module.exports.SchoolClass = require('./models/SchoolClass')(sequelize, Sequelize.DataTypes)
module.exports.Teacher = require('./models/Teacher')(sequelize, Sequelize.DataTypes)
module.exports.Todos = require('./models/Todos')(sequelize, Sequelize.DataTypes)
module.exports.Users = require('./models/Users')(sequelize, Sequelize.DataTypes)
