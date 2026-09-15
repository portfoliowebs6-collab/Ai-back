const { admin } = require('../config/firebase');
const fs = require('fs');

const uploadToCloud = async (localFilePath) => {
    try {
        const bucket = admin.storage().bucket();
        const fileName = `kewa_uploads/${Date.now()}_${path.basename(localFilePath)}`;
        
        // Upload file to Firebase Storage bucket
        // const response = await bucket.upload(localFilePath, { destination: fileName });
        
        // Cleanup local file
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        // Return public or signed URL placeholder
        return `https://storage.googleapis.com/kewa-ai.appspot.com/${fileName}`;
    } catch (error) {
        if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);
        throw new Error(`Storage Service Error: ${error.message}`);
    }
};

module.exports = { uploadToCloud };
