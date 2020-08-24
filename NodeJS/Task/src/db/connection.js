const Seq  = require('sequelize');

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const sequelize = new Seq.Sequelize('task', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
  });

// sequelize.authenticate()
//     .then(()=>console.log('Connection has been established successfully1.'))
//     .catch((error)=>console.error('Unable to connect to the database:'))
    
module.exports=sequelize
  