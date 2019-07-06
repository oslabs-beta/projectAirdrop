const databaseController = {};

databaseController.getTestData = (req, res, next) => {
    let words = [];
    while(words.length < 20){
        Math.ceil(Math.random()*80);
        
    }
}


module.exports = databaseController;