import * as admin from 'firebase-admin';
import {applicationDefault} from 'firebase-admin/app';

const SLEEP_TIME = 1000;

const getFirestoreDBReference = (): admin.database.Database => {
  admin.initializeApp({
    credential: applicationDefault(),
    databaseURL: "https://chaomao-stock-dev-68-default-rtdb.firebaseio.com"
  });

  return admin.database();
};

const getDBReferenceFromPath = (
  db: admin.database.Database,
  dataPath?: string
):
  | admin.database.Reference => {
  let startingRef;
    startingRef = db.ref("aaaa")

  return startingRef;
};

const sleep = (timeInMS: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, timeInMS));

const batchExecutor = async function <T>(
  promises: Promise<T>[],
  batchSize = 50
) {
  const res: T[] = [];
  while (promises.length > 0) {
    const temp = await Promise.all(promises.splice(0, batchSize));
    res.push(...temp);
  }
  return res;
};

type anyFirebaseRef =
  | admin.database.Database
  | admin.database.Reference;

export {
  getFirestoreDBReference,
  getDBReferenceFromPath,
  sleep,
  batchExecutor,
  anyFirebaseRef,
};
