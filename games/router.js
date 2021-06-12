var houseCtrl = require('./game');
var router = require('express').Router();

/*Services used for admin*/

router.route('/get_valid_sets')
	.get(houseCtrl.getValidSets);


module.exports = router;
