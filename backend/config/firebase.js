const admin = require('firebase-admin');

// Service account credentials can be loaded via environment variables or JSON file path
const initializeFirebase = () => {
    try {
        if (!admin.apps.length) {
            admin.initializeApp({
                credential: admin.credential.cert({
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
                    clientEmail: process.env.FIREBASE_CLIENT_EMAIL
                }),
                storageBucket: process.env.FIREBASE_STORAGE_BUCKET
            });
            console.log('Firebase Admin Initialized Successfully');
        }
    } catch (error) {
        console.error('Firebase Initialization Error:', error.message);
    }
};

module.exports = { initializeFirebase, admin };
