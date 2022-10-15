const errorVariables = (code,message) =>{
    return{
        type:'known',
        code,
        message
    }
}

module.exports = {
    errorVariables
}