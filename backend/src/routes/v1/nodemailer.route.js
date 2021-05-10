const express = require('express');
const { mailerController } = require('../../controllers');

const router = express.Router();

router
  .post('/send', mailerController.sendMail)
  .post('/reset', mailerController.sendResetPassword)
  .post('verification', mailerController.sendVerificationEmail);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Send Gmail
 *   description: Send Gmail
 */

/**
 * @swagger
 * /nodemail/send:
 *   post:
 *     summary: Send gmail as user
 *     tags: [Send Gmail]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *             example:
 *               email: fake@example.com
 *     responses:
 *       "201":
 *         description: Send Gmail
 *         */
