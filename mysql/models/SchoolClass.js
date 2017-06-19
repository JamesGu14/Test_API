/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SchoolClass', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    teacher_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Teacher',
        key: 'id'
      }
    }
  }, {
    tableName: 'SchoolClass'
  });
};
