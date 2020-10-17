const express = require("express");

const Routes = require('./routes');
const router = express.Router();

//Write out all possible routes

router.get('/all', Routes.allInfo);
router.post('/create', Routes.createEntry);
router.put('/delete', Routes.deleteEntry);
router.put('/deleteAll', Routes.deleteAll);

module.exports = router;