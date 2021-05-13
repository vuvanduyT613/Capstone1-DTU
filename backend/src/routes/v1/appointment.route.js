const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
//const userValidation = require('../../validations/user.validation');
const { objectController } = require('../../controllers');

const router = express.Router();

router
  .route('/:slug')
  .get(auth(), objectController.getObject)
  .post(auth(), objectController.createObject)
  .put(auth(), objectController.updateObject)
  .delete(auth(), objectController.deleteObject);

module.exports = router;
