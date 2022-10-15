const { Pool } = require('pg')
const { errorVariables } = require('../helpers/errorVars') // for making error variables and codes e.g 500 , 400 ,404

// using cloud database heroku
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    ssl: { rejectUnauthorized: false }
})

class Db {
    static async query(queryStr) {
        try {
            const res = await pool.query(queryStr)
            return res
        } catch (error) {
            console.log('database connection error');
            console.log(error);
            throw (errorVariables(500,'Internal server error'))
        }
    }
} 

module.exports = {
    Db
}
