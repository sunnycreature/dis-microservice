import log from '../../logger/log';
import { Contact } from '../../models/firebird/interfaces/contact.interface';
import { DataObject, DataResponse } from '../../models/firebird/interfaces/global.interface';
import contactModel from '../../models/firebird/contact.model';

/**
 * DocumentState data access functions
 */
export class ContactDao {
  /**
   * add many contacts
   * @param name name of data
   * @param data contacts array
   * @return a promise with true
   */
  public async addMany(req: DataObject<Contact>): Promise<DataResponse> {
    const { name, data } = req;
    log.info(`DAO : addMany() - ${name}`);

    const value = await contactModel.addMany(data);

    if (value === null) {
      return { resultCode: '0', resultDescription: `${name} не загружены` };
    }
    return { resultCode: '1', resultDescription: '' };
  }
}
