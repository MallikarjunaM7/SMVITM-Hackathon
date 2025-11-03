const router = require("express").Router();
const { addItem, getItemsByDay, getAllItems } = require("../controller/item-controller");

router.route('/add-item').post(addItem);

router.route('/allitems').get(getAllItems);


router.route('/:day').get(getItemsByDay);

module.exports = router;
