const Seq = require('sequelize');

const sequelize = new Seq.Sequelize('stock', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  }
});

module.exports = sequelize
