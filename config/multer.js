const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

// Custom Multer Storage Configuration
const storage = multer.diskStorage({
  // Specify the destination folder for uploaded files
  destination: function (req, file, cb) {
    // Ensure the 'public' folder exists in your project root
    cb(null, path.join(__dirname, '..', 'public'));  // Or use any folder you prefer
  },

  // Specify the filename for the uploaded file
  filename: function (req, file, cb) {
    // Generate a unique hash for the file based on its original name and timestamp
    const hash = crypto.createHash('sha256');
    hash.update(file.originalname + Date.now());  // Using the original filename and current timestamp
    const uniqueSuffix = hash.digest('hex');  // Create a hex hash string

    // Get the file extension from the original file
    const fileExtension = path.extname(file.originalname);

    // Set the filename to the unique hash + file extension (e.g., hash1234567890.png)
    cb(null, uniqueSuffix + fileExtension);
  }
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });

// Export the upload middleware to use in your routes
module.exports = upload;
