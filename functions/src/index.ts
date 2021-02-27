import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();
const db = admin.firestore();

const sendResponse = (
    response: functions.Response,
    statusCode: number,
    body: any
) => {
  response.send({
    statusCode,
    body: JSON.stringify(body),
  });
};

export const addDataset = functions.https.onRequest(
    async (req: any, res: any) => {
      if (req.method !== "POST") {
        sendResponse(res, 404, {error: "Invalid Request"});
      } else {
        const dataset = req.body;
        for (const key of Object.keys(dataset)) {
          const data = dataset[key];
          await db.collection("questions").doc(key).set(data);
        }
        sendResponse(res, 200, {message: "Successfully added"});
      }
    }
);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
