var express = require('express')
var router = express.Router()
var sequelize = require('../mysql/index')
const Users = require('../mysql/index').Users
const Roles = require('../mysql/index').Roles

/* GET home page. */
router.get('/', function(req, res, next) {

  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  res.json({
    a: 1
  })
})

router.get('/users', function (req, res) {

  var resultSet = []

  Users.findAll({
    attributes: ['id', 'name', 'age', 'createdAt']
  }).then(users => {
    users.forEach(u => {
      resultSet.push(u.dataValues)
    })

    res.json(resultSet)
  })
})

router.get('/join', function (req, res) {

  Roles.hasMany(Users, {foreignKey: 'userRoleId'})
  Users.belongsTo(Roles, {foreignKey: 'id'})

  Roles.findAll({ where: {}, include: [Users] }).then(r => {
    res.json(r)
  })
})

module.exports = router
