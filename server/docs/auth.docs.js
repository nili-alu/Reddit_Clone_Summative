

/**
 * @openapi
 * components:
 *  schemas:
 *    creatinguser:
 *      type: object
 *      required:
 *        -username
 *        -password
 *      example:
 *        username: Delyce
 *        password: de125L
 *      properties:
 *        username:
 *          type: string
 *          description: your username
 *        password:
 *          type: string
 *          description: strong password required
 * 
 */



/**
 * @openapi
 * /api/register:
 *  post:
 *    summary: create user
 *    tags:
 *      - User
 *    description: user login
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *           $ref: "#/components/schemas/creatinguser"
 *    responses:
 *      200:
 *        description: user successfully created
 *
 */