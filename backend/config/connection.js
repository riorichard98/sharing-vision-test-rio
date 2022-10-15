const { Pool } = require('pg')

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
    static async get(query) {
        try {
            const res = await pool.query(query)
            return res.rows[0]
        } catch (error) {
            console.log('error in connecting to database');
        } finally{
            pool.end()
        }
    }
}

module.exports = Db
