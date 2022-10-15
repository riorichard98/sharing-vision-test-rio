const createTableQuery = `
CREATE TABLE posts(
    "id" SERIAL PRIMARY KEY,
    "Title" VARCHAR(200),
    "Content" TEXT,
    "Category" VARCHAR(100),
    "Created_date" TIMESTAMP,
    "Updated_date" TIMESTAMP,
    "Status" VARCHAR(100) 
);`

const deleteTableQuery = `
DROP TABLE posts ;
`

module.exports = {
    createTableQuery,
    deleteTableQuery
}