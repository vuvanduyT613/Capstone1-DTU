const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
//const userValidation = require('../../validations/user.validation');
const { objectController } = require('../../controllers');

const router = express.Router();

router.route('/:slug').post(objectController.createObject);
/*.get(auth(), validate(userValidation.getUsers), userController.getUsers)
  .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
  .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);
*/
module.exports = router;
