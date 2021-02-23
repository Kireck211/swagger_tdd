const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users to adopt animals
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - name
 *        - age
 *      properties:
 *        id:
 *          type: integer
 *          description: User id
 *        name:
 *          type: string
 *          description: User fullname
 *        age:
 *          type: integer
 *          description: User age
 *      example:
 *        id: 1
 *        name: Erick De Santiago
 *        age: 25
 */

/**
 * @swagger
 * /users:
 *  get:
 *    summary: Get the registered users
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: Shows the users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */
router.get('/', (req, res) => {});

module.exports = router;
