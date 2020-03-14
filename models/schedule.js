'use strict';

const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Schedule = loader.detabase.define('schedules', {
  scheduleId: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  scheduleName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  memo: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  createBy: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  updateAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false,
  indexes: [
    {
      fields: ['createBy']
    }
  ]
});

module.exports = Schedule;
