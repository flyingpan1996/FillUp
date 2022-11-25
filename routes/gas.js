const express = require('express');
const router = express.Router();
const gasCtrl = require('../controllers/gas');


router.get('/', gasCtrl.index);
router.get('/new', gasCtrl.new);
router.get('/:id', gasCtrl.show);
router.post('/', gasCtrl.create);
router.post('/:id', gasCtrl.update);
router.delete('/:id', gasCtrl.delete);




module.exports = router;
