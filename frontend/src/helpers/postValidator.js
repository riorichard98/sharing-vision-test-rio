const errorVariables = (code,message) =>{
    return{
        type:'known',
        code,
        message
    }
}

const postValidator = (data) => {
    if (!data.title || data.title.length < 20) {
        throw (errorVariables(400, 'Please insert title correctly and at least 20 characters'))
    }
    if (!data.content || data.content.length < 200) {
        throw (errorVariables(400, 'Please insert content and at least 200 characters'))
    }
    if (!data.category || data.category.length < 3) {
        throw (errorVariables(400, 'Please insert category and at least 3 characters'))
    }
    let statusObj = {
        publish: true,
        draft: true,
        thrash: true
    }
    if(!data.status || !statusObj[data.status]){
        throw (errorVariables(400,'please insert status and only in on of this : publish , draft , thrash'))
    }
    
}

module.exports = {
    postValidator
}