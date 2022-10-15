require('dotenv').config()
const { undoMigrate } = require('./migrations/migrate')

undoMigrate()