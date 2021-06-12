const SHAPE_OVAL = 'oval';
const SHAPE_SQUIGGLES = 'squiggle';
const SHAPE_DIAMOND = 'diamond';
const COLOR_RED = 'reD';
const COLOR_PURPLE = 'purple';
const COLOR_GREEN = 'green';
const SHADING_SOLID = 'solid';
const SHADING_STRIPED = 'striped';
const SHADING_OUTLINED = 'outlined';

function getDummyDeck(){
	let cardsArray = [];

	cardsArray.push({ shape: SHAPE_DIAMOND, color: COLOR_RED, number: 1, shading: SHADING_OUTLINED });
	cardsArray.push({ shape: SHAPE_DIAMOND, color: COLOR_GREEN, number: 2, shading: SHADING_OUTLINED });
	cardsArray.push({ shape: SHAPE_DIAMOND, color: COLOR_PURPLE, number: 3, shading: SHADING_STRIPED });
	cardsArray.push({ shape: SHAPE_OVAL, color: COLOR_GREEN, number: 1, shading: SHADING_STRIPED });

	cardsArray.push({ shape: SHAPE_DIAMOND, color: COLOR_RED, number: 2, shading: SHADING_SOLID });
	cardsArray.push({ shape: SHAPE_OVAL, color: COLOR_GREEN, number: 3, shading: SHADING_STRIPED });
	cardsArray.push({ shape: SHAPE_DIAMOND, color: COLOR_PURPLE, number: 2, shading: SHADING_STRIPED });
	cardsArray.push({ shape: SHAPE_DIAMOND, color: COLOR_RED, number: 2, shading: SHADING_OUTLINED });

	cardsArray.push({ shape: SHAPE_SQUIGGLES, color: COLOR_PURPLE, number: 1, shading: SHADING_SOLID });
	cardsArray.push({ shape: SHAPE_DIAMOND, color: COLOR_PURPLE, number: 1, shading: SHADING_STRIPED });
	cardsArray.push({ shape: SHAPE_SQUIGGLES, color: COLOR_RED, number: 1, shading: SHADING_STRIPED });
	cardsArray.push({ shape: SHAPE_SQUIGGLES, color: COLOR_PURPLE, number: 2, shading: SHADING_OUTLINED });

	return cardsArray;
}



module.exports = {
    getDummyDeck,
    SHAPE_OVAL,
    SHAPE_SQUIGGLES,
    SHAPE_DIAMOND,
    COLOR_RED,
    COLOR_PURPLE,
    COLOR_GREEN,
    SHADING_SOLID,
    SHADING_STRIPED,
    SHADING_OUTLINED      
};