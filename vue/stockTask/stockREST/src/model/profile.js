const Sequelize = require("sequelize");

const db = require("../db/connection");

const Profile = db.define("profile", {
  name: Sequelize.STRING,
});

const Customer = db.define("customer", {
  username: Sequelize.STRING,
  points: Sequelize.INTEGER,
});

//Customer.belongsToMany(Profile, { through: 'User_Profiles' });

// Customer.sync().then(() => {
//    console.log('table created');
// }).catch((err) => { console.log('Error', err) });


Profile.belongsToMany(Customer, { through: "User_Profiles" });
Customer.belongsToMany(Profile, { through: "User_Profiles" });

db.sync();

module.exports = { Customer,Profile }
 