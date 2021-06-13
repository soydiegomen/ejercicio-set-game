var gameHelper = require('./gameHelper');

const getValidSets = function (req, res) {
	let result = runSetGame()
	res.contentType('application/json');
	res.send(JSON.stringify(result));
}

function runSetGame(){
	let cardsArray = gameHelper.getDummyDeck();
	result = creteAllPosibleSets(cardsArray);

	return result;
}

function creteAllPosibleSets(cardsArray){
	let posibleSets = [];

	for(let i = 0; i < cardsArray.length; i++){
		let firstCard = cardsArray[i];
		//let setThreeCards = [];
		
		//Agrego la primer carta
		//setThreeCards.push(firstCard);

		//Comenzar el segundo ciclo por el item en la posición siguiente
		for(let j = (i+1); j < cardsArray.length; j++){
			let secondCard = cardsArray[j];

			//Agrego la segunda carta
			//setThreeCards.push(secondCard);

			for(let z = (j+1); z < cardsArray.length; z++){
				let thirdCard = cardsArray[z];

				//Agrego la tercer carta
				let setThreeCards = [firstCard, secondCard, thirdCard ];
				console.log(setThreeCards);
				posibleSets.push(setThreeCards);
			}
		}

	}

	console.log('no. set posibles', posibleSets.length);

	return posibleSets;
}


module.exports = {
    getValidSets
};