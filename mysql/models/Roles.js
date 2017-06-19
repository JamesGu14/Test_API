/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Roles', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    roleName: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'Roles'
  });
};
