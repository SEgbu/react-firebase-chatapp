"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_functions_1 = require("firebase-functions");
const firebase_admin_1 = require("firebase-admin");
const Filter = require("bad-words");
// admin.initializeApp()
(0, firebase_admin_1.initializeApp)();
const db = (0, firebase_admin_1.firestore)();
exports.detectEvilUsers = firebase_functions_1.firestore
    .document("messages/{msgId}")
    .onCreate(async (doc, ctx) => {
    const filter = new Filter();
    const { text, uid } = doc.data();
    if (filter.isProfane(text)) {
        const cleaned = filter.clean(text);
        await doc.ref.update({ text: "I got BANNED mang and this is what I said: " + cleaned });
        await db.collection("banned").doc(uid).set({});
    }
});
//# sourceMappingURL=index.js.map