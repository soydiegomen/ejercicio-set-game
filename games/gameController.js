var gameHelper = require('./gameHelper');

const getValidSets = function (req, res) {
	let result = runSetGame()
	res.contentType('application/json');
	res.send(JSON.stringify(result));
}

function runSetGame(){
	let cardsArray = gameHelper.getDummyDeck();
	let posibleSets = creteAllPosibleSets(cardsArray);
	let validShapes = validateSets(posibleSets,'shape');

	return validShapes;
}

function creteAllPosibleSets(cardsArray){
	let posibleSets = [];

	for(let i = 0; i < cardsArray.length; i++){
		//Defino la primer carta
		let firstCard = cardsArray[i];

		//Comenzar el segundo ciclo por el item en la posición siguiente
		for(let j = (i+1); j < cardsArray.length; j++){
			//Defino la segunda carta
			let secondCard = cardsArray[j];

			for(let z = (j+1); z < cardsArray.length; z++){
				//Defino la tercer carta
				let thirdCard = cardsArray[z];

				//Creo el set con las tres cartas
				let setThreeCards = [firstCard, secondCard, thirdCard ];
				posibleSets.push(setThreeCards);
			}
		}

	}

	console.log('no. set posibles', posibleSets.length);

	return posibleSets;
}

function validateSets(posibleSets, feature){
	let validSets = [];

	for(let i = 0; i < posibleSets.length; i++){
		//Defino la primer carta
		let setToAnalize = posibleSets[i];

		//Todos los sets son de tres cartas por lo cual podemos validar teniendo la certeza de que hay 3 items
		//Si el feature de los 3 sets es el mismo entonces es un set valido
		if(
			setToAnalize[0][feature] == setToAnalize[1][feature] && 
			setToAnalize[0][feature] == setToAnalize[2][feature] &&
			setToAnalize[1][feature] == setToAnalize[2][feature])
			{
				validSets.push(setToAnalize);
				console.log('Set valido', setToAnalize);
			}

		//Si el feature de los 3 sets es diferente es un set valido
		if(
			setToAnalize[0][feature] != setToAnalize[1][feature] && 
			setToAnalize[0][feature] != setToAnalize[2][feature] &&
			setToAnalize[1][feature] != setToAnalize[2][feature])
			{
				validSets.push(setToAnalize);
				console.log('Set valido', setToAnalize);
			}

	}

	return validSets;
}


module.exports = {
    getValidSets
};