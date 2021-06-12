var gameHelper = require('./gameHelper');

const getValidSets = function (req, res) {
	let result = runSetGame()
	res.contentType('application/json');
	res.send(JSON.stringify(result));
}

function runSetGame(){
	let result = gameHelper.getDummyDeck();
    
	return result;
}

module.exports = {
    getValidSets
};