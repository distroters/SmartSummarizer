const sequelize = require('sequelize')

const db = new sequelize(
    'userdb',
    'userdb',
    'userdb',

    {
        dialect : 'mysql',
        host : 'localhost'
    }
)

const users = db.define('users', {
    username : {
        type : sequelize.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : sequelize.STRING,
        allowNull : false
    },

    firstName : sequelize.STRING,
    lastName : sequelize.STRING
})

db.sync().then(() => {
    console.log('database is ready')
})
exports = module.exports = {
    db,
    users
}