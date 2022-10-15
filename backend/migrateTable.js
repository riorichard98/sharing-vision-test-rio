require('dotenv').config()
const { migrate } = require('./migrations/migrate')

migrate()
