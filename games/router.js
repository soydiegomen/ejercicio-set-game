var gameController = require('./gameController');
var router = require('express').Router();

/*Services used for admin*/

router.route('/get_valid_sets')
	.get(gameController.getValidSets);


module.exports = router;
