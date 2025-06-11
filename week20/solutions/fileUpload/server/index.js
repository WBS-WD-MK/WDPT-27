import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import upload from './utils/multerConfig.js';
import cors from 'cors';
const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('__DIR', __dirname);
app.use(cors());

app.use('/files', express.static(path.join(__dirname, 'uploads')));

app.post('/file-upload', upload.single('file'), (req, res) => {
  console.log(req.file);
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({
    location: `http://localhost:${PORT}/files/${req.file.filename}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
