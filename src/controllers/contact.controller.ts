import { Request, Response, NextFunction } from 'express';
import { DataNotFoundException } from '../exceptions/datanotfound.exception';
import { Contact } from '../models/firebird/interfaces/contact.interface';
import { ContactService } from '../services/contact.service';
import { DataObject } from '../models/firebird/interfaces/global.interface';

/**
 * Controller managing documents requests and responses
 */
export class ContactController {
  private contactService: ContactService;

  constructor() {
    this.contactService = new ContactService();
  }

  /**
   * Update one document by uid, and returns result in a json
   * @param req rest request, with the uid
   * @param res rest response
   * @param next middleware, the error handling
   */
  public addMany(req: Request, res: Response, next: NextFunction) {
    try {
      // const { name, data } = req.body as DataObject<Contact>;

      // console.log('req.body', req.body);
      if (!('data' in req.body)) {
        throw new DataNotFoundException(': data is required');
      }
      this.contactService
        .addMany(req.body as DataObject<Contact>)
        .then((value: any) => {
          res.status(200).json(value);
        })
        .catch(next);
    } catch (error) {
      next(error);
    }
  }
}
