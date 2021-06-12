
const getValidSets = function (req, res) {
	let result = getDummyResult()
	res.contentType('application/json');
	res.send(JSON.stringify(result));
}

function getDummyResult(){
    return { resultado : 'success'};;
}


module.exports = {
    getValidSets
};