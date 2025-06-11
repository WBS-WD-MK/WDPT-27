import multer from 'multer';
import path from 'path';

// Set up Multer's storage configuration
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    // we need to generate a unique name for the file Math.round(Math.random() * 1e9) is needed to make sure that the file name is unique specially if the user upload multiple files with the same time
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    // get the file extension from the original file name
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  },
});

// Set up file filter to only allow image files
const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

// Multer configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, // Limit file size to 2MB
});

export default upload;
