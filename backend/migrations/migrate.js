const { Db } = require("../config/connection");
const { createTableQuery, deleteTableQuery } = require("./migrationsQuery");

const migrate = async () =>{
    try {
        await Db.query(createTableQuery)
    } catch (error) {
        console.log('failed migrating')
        console.log(error);
    } finally {
        console.log('migrating table done');
    }
}

const undoMigrate = async () =>{
    try {
        await Db.query(deleteTableQuery)
    } catch (error) {
        console.log('failed undo migrate')
        console.log(error);
    } finally {
        console.log('undo migrate table done');
    }
}

module.exports = {
    migrate,
    undoMigrate
}

