var gameHelper = require('./gameHelper');

const getValidSets = function (req, res) {
	let result = runSetGame()
	res.contentType('application/json');
	res.send(JSON.stringify(result));
}

function runSetGame(){
	let cardsArray = gameHelper.getDummyDeck();
	//let result = getValidShapeArray(cardsArray);
	let validShapes = getValidArrayByFeature(cardsArray, 'shape');
	let validColors = getValidArrayByFeature(cardsArray, 'color');
	let validNumbers = getValidArrayByFeature(cardsArray, 'number');
	let validShading = getValidArrayByFeature(cardsArray, 'shading');
	    
	let result = {
		validShapes,
		validColors,
		validNumbers,
		validShading
	}

	return result;
}

function getValidArrayByFeature(cardsArray, feature){
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

					allAreEqueal = allAreEqueal && (card[feature] === items[index][feature]);
					allAreDifferent = allAreDifferent && (card[feature] !== items[index][feature]);

					if(index > 0){
						//Permite saber si todo el arreglo es del mismo shape (si dos items son del mismo shape, todos los del arreglo lo son)
						isArrayWithTheSameShape = isArrayWithTheSameShape && (items[index-1][feature] === items[index][feature]);
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
							allAreEqueal = item[feature] === validArray[index-1][feature];
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

	let finalValidShapes = getValidItemsBySize(validShapes, feature);

	return finalValidShapes;
}

//Solo pueden ser validos los arreglos que tienen al menos 3 items (ya que el juego es por tercias de cartas)
function getValidItemsBySize(validShapes, feature){
	let arrayWithValidSize = [];

	//Aqui podríamos hacer pop 
	for(let index=0; index<validShapes.length; index++  ){
		let items = validShapes[index];

		if(items.length >= 3){
			arrayWithValidSize.push(items);
		}
	}

	//Validar que no haya sets con los mismos elementos
	for(let index=0; index<arrayWithValidSize.length; index++  ){
		let items = arrayWithValidSize[index];

		for(let y=index+1; y<arrayWithValidSize.length; y++  ){
			let itemsToCompare = arrayWithValidSize[y];
			if(items.length === itemsToCompare.length){
				if(hasTheSameElements(items, itemsToCompare, feature)){
					arrayWithValidSize.splice(y, 1);
				}

			}
		}
	}

	return arrayWithValidSize;
}

function hasTheSameElements(items, itemsToCompare, feature){
	let index = 0;

	let hasTheSameItems = true;
	while(index < items.length && hasTheSameItems){
		let card = items[index];
		let featureExist = false;

		let internaleIndex = 0;
		while(!featureExist && internaleIndex < itemsToCompare.length){
			let internalCard = itemsToCompare[internaleIndex];

			if(card[feature] == internalCard[feature]){
				featureExist = true;
			}

			internaleIndex++
		}

		hasTheSameItems = (hasTheSameItems && featureExist);

		index++;
	}

	return hasTheSameItems;
}


module.exports = {
    getValidSets
};