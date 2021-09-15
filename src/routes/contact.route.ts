import { ContactController } from '../controllers/contact.controller';
import { Router } from 'express';

/**
 * "document" api router specifications
 * => API_URL/api/dis/
 */
export class ContactRoute {
  private api: Router = Router();
  private readonly contactController: ContactController;

  constructor() {
    this.contactController = new ContactController();
    this.routes();
  }

  /**
   * @return The application router/api
   */
  public getApi(): Router {
    return this.api;
  }

  /**
   * Define contact routes
   */
  private routes(): void {
    /**
     * @swagger
     * /api/contacts:
     *   post:
     *     tags:
     *      - Contact
     *     summary: Adds contacts
     *     description: Adds contacts
     *     security:
     *      - bearerAuth: []
     *     parameters:
     *      - name: body
     *        in: body
     *        description: Object with array of contacts
     *        required: true
     *        schema:
     *          $ref: '#/definitions/DataObject'
     *        examples:
     *          contacts:
     *            summary: A data example
     *            value: {"name":"contact", "data":[{"code":"РПКП000011","address":"г.Минск, ул.Ванеева, 11","phone":"(0172)-11-11-11","taxid":"100081111","name":"ЗАО \"ТВ1\"","gln":"4812019900111","edi":"EDN","email":"11@gmail.com;  h.11@gmail.com"},{"code":"РПКП000222","address":"Новодворский с/с, д.22, к.2","phone":"80172518222","taxid":"800013222","name":"ИООО \"Пром2\"","gln":"2222595999222","edi":"СТТ","email":"sales222@gmail.by"},{"code":"РПКП000222","address":"Логойский тракт, д.22","phone":"(017) 268-22-22","taxid":"100369222","name":"СП \"ТРЕЙД222\"","gln":"4810409900222","edi":"СТТ","email":"222@yandex.ru; 2222@tut.by"}]}
     *
     *     produces:
     *      - application/json
     *     responses:
     *       200:
     *         description: Success
     *       404:
     *         description: DataNotFoundException
     *       400:
     *         description: Malformed request syntax (uid required)
     *       500:
     *         description: Error during query execution
     */

    /**
     * @swagger
     * definitions:
     *   DataObject:
     *     type: object
     *     title: DataObject
     *     required:
     *       - name
     *       - data
     *     properties:
     *       name:
     *         type: string
     *       data:
     *         type: object
     *         title: contacts array
     *         required:
     *           - name
     *           - code
     *         properties:
     *           name:
     *             type: string
     *           code:
     *             type: string
     *           address:
     *             type: string
     *           phone:
     *             type: string
     *           email:
     *             type: string
     *           gln:
     *             type: string
     *           taxid:
     *             type: string
     */

    this.api.post('/', this.contactController.addMany.bind(this.contactController));
  }
}
