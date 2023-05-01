import * as admin from "firebase-admin"
import serviceAccount from "../../wmo-tool-firebase-adminsdk-9x9ad-17ea247f82.json"

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  })
}

export const firestore = admin.firestore()