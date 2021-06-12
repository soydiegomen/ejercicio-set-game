var gameHelper = require('./gameHelper');

const getValidSets = function (req, res) {
	let result = runSetGame()
	res.contentType('application/json');
	res.send(JSON.stringify(result));
}

function runSetGame(){
	let cardsArray = gameHelper.getDummyDeck();
	let result = getValidShapeArray(cardsArray);
	
    
	//return grupedCardsByShape;
	return result;
}

//Debe crear un arreglo de dos dimesiones
function getValidShapeArray(cardsArray){
	let validShapes = [];
	cardsArray.forEach(function(card, x) {

		if(validShapes.length === 0){
			let firstArray = [];
			firstArray.push(card);
			validShapes.push(firstArray);
		} else{
			
			let wasAddedToValidArray = false;
			//Revisa si la carta actual puede entrar en alguno de los arreglos de cartas validos
			for(let i = 0; i < validShapes.length; i++){
				items = validShapes[i];

				let allAreEqueal = true;
				let allAreDifferent = true;
				let isArrayWithTheSameShape = true;

				for(let index = 0; index < items.length; index++){

					allAreEqueal = allAreEqueal && (card.shape === items[index].shape);
					allAreDifferent = allAreDifferent && (card.shape !== items[index].shape);

					if(index > 0){
						//Permite saber si todo el arreglo es del mismo shape (si dos items son del mismo shape, todos los del arreglo lo son)
						isArrayWithTheSameShape = isArrayWithTheSameShape && (items[index-1].shape === items[index].shape);
					}
				}

				if(allAreEqueal){
					items.push(card);
					wasAddedToValidArray = true;
				}

				if(allAreDifferent && !isArrayWithTheSameShape){
					items.push(card);
				}
			
			}

			//Si el shape no se agrego a ningún arreglo sifnifica que es hay que registrarlo en un nuevo item
			if(!wasAddedToValidArray){
				//Se buscan los arreglos que son de un solo tipo de shape, para crear un nuevo arreglo con el nuevo shape + el tipo del arreglo
				validShapes.forEach(function(validArray) {
					let allAreEqueal = true;

					let index = 0;
					while( index < validArray.length){
						let item = validArray[index];
						if(index > 0){
							allAreEqueal = item.shape === validArray[index-1].shape;
						}

						index++;
					}

					if(!allAreEqueal && validArray.length === 1){
						allAreEqueal = true;
					}

					if(allAreEqueal){
						//En los arreglos de un solo tipo de shape, se agrega un nuevo item con la tarjeta nueva y el shape del arreglo
						let newShape = [];
						newShape.push(card);
						newShape.push(validArray[0]);
						validShapes.push(newShape);
					}

				})

				let newShape = [];
				newShape.push(card);
				validShapes.push(newShape);

			}
		}
	})

	let finalValidShapes = getValidItemsBySize(validShapes);

	return finalValidShapes;
}

//Solo pueden ser validos los arreglos que tienen al menos 3 items (ya que el juego es por tercias de cartas)
function getValidItemsBySize(validShapes){
	let arrayWithValidSize = [];

	//Aqui podríamos hacer pop 
	validShapes.forEach(function(items) {
		if(items.length >= 3){
			arrayWithValidSize.push(items);
		}	
	})

	return arrayWithValidSize;
}

module.exports = {
    getValidSets
};