import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../client/dist'));

app.get('/', (_req, res) => {
    const filePath = path.join(__dirname, '../../client/index.html');
    res.sendFile(filePath);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});