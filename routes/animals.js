const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Animals
 *  description: Animals for adoption
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Animal:
 *      type: object
 *      required:
 *        - name
 *        - breed
 *      properties:
 *        id:
 *          type: integer
 *          description: Animal id
 *        name:
 *          type: string
 *          description: Animal name
 *        breed:
 *          type: string
 *          description: Animal breed
 *      example:
 *          id: 23421
 *          name: Kira
 *          breed: Cocker
 *    BadRequest:
 *      type: object
 *      properties:
 *        code:
 *          type: integer
 *        messages:
 *          type: string
 *      example:
 *        code: 400
 *        message: 'Body must contain "name" property'
 */

/**
 * @swagger
 * /animals:
 *  get:
 *    summary: Retrieve animals
 *    tags: [Animals]
 *    responses:
 *      200:
 *        description: Ok response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Animal'
 */
router.get('/', (req, res) => {
  res.send([{ id: 23423, name: 'Kira', breed: 'Cocker' }]);
});

/**
 * @swagger
 * /animals:
 *  post:
 *    summary: Create an animal
 *    tags: [Animals]
 *    responses:
 *      200:
 *        description: Ok response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Animal'
 *      400:
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BadRequest'
 */
router.post('/', (req, res) => {
  const { id } = req.body;
  res.send([{ id, name: 'Kira', breed: 'Cocker' }]);
});

module.exports = router;
