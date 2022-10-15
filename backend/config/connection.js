const { Pool } = require('pg')
const { errorVariables } = require('../helpers/errorVars') // for making error variables and codes e.g 500 , 400 ,404

// using cloud database heroku
const pool = new Pool({
    user: 'pwdlyfcikyreat',
    host: 'ec2-54-160-200-167.compute-1.amazonaws.com',
    database: 'd32ka2q7rl56n8',
    password: 'ce6b866ec7f21823b30be5e77f3c67fa2800a3963dd9245c15443a5e5c4d6459',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

class Db {
    static async query(queryStr) {
        try {
            const res = await pool.query(queryStr)
            return res
        } catch (error) {
            console.log('database connection error');
            throw (errorVariables(500,'Internal server error'))
        } finally{
            pool.end()
        }
    }
}

module.exports = {
    Db
}
