import {
  anyFirebaseRef,
  batchExecutor,
} from './firestore-helpers';
import {array_chunks, unserializeSpecialTypes} from './helpers';
import {ICollection} from '../interfaces/ICollection';
import * as admin from 'firebase-admin';

const importData = (
  data: any,
  startingRef: anyFirebaseRef,
  mergeWithExisting = true,
  logs = false
): Promise<any> => {
  const dataToImport = {...data};

    return setDocuments(
      dataToImport,
      <admin.database.Reference>startingRef,
      mergeWithExisting,
      logs
    );
};

const setDocuments = (
  data: ICollection,
  startingRef: admin.database.Reference,
  mergeWithExisting = true,
  logs = false
): Promise<any> => {
  logs && console.log(`Writing documents for ${startingRef.ref}`);
  return startingRef.set(data)
};

export default importData;
export {setDocuments};
