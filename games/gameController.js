var gameHelper = require('./gameHelper');

const getValidSets = function (req, res) {
	let result = runSetGame()
	res.contentType('application/json');
	res.send(JSON.stringify(result));
}

function runSetGame(){
	let cardsArray = gameHelper.getDummyDeck();
	grupedCardsByShape = groupCardsByShape(cardsArray);

	let arrayDiferenteNumber = [];
	//Itero los diferente shapes
	grupedCardsByShape.forEach(function(item) {
		let cards = item.cards;
		//Itero los grupos que ya se que son del mismo shape
		for(let index=0; index < cards.length; index++){
			let targetCard = cards[index];

			let sameShapeDiferentNumber = [];
			//Buscar las cartas que tienen diferente numero
			for(let internIndex=(index + 1); internIndex < cards.length; internIndex++){
				let internalCard = cards[internIndex]
				if(targetCard.number !== internalCard.number){
					sameShapeDiferentNumber.push(internalCard);
				}
			}

			arrayDiferenteNumber.push({ target: targetCard, sameShapeDiferentNumber: sameShapeDiferentNumber });
			
		}

	})
    
	//return grupedCardsByShape;
	return arrayDiferenteNumber;
}

function groupCardsByShape(cardsArray){
	let shapesArray = [gameHelper.SHAPE_OVAL, gameHelper.SHAPE_SQUIGGLES, gameHelper.SHAPE_DIAMOND];
	let grupedCardsByShape = [];

	shapesArray.forEach(function(shape) {
		let cards = orderCardsByShape(cardsArray, shape);
		grupedCardsByShape.push({
			shape: shape,
			cards: cards
		});
	})

	return grupedCardsByShape;
}

function orderCardsByShape(cardsArray, shape){
	let shapeArray = [];
	cardsArray.forEach(function(card) {
		if(card.shape === shape){
			shapeArray.push(card);
		}
	})

	return shapeArray;
}

module.exports = {
    getValidSets
};