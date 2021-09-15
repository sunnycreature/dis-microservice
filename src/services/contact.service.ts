import { Contact } from '../models/firebird/interfaces/contact.interface';
import { DataObject, DataResponse } from '../models/firebird/interfaces/global.interface';
import { ContactDao } from '../dao/firebird/contact.dao';

/**
 * Document service
 */
export class ContactService {
  private contactDao: ContactDao;

  constructor() {
    this.contactDao = new ContactDao();
  }

  public addMany(req: DataObject<Contact>): Promise<DataResponse> {
    return this.contactDao.addMany(req);
  }
}
