const router = require('express').Router()
const userController = require('../controllers/userController')

router.get("/getAllUsers", userController.getAllUsers);
router.post("/addUser", userController.addUser);
router.put("/updateUser/:userId", userController.updateUser);
router.delete("/deleteUser/:userId", userController.deleteUser);


module.exports = router
