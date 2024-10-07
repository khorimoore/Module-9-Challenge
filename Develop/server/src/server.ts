import express, { Router } from 'express';
import path from 'path';

const app = express();
const router = Router();
const PORT = process.env.PORT || 3000;

router.get('/', (_req, res) => {
    const filePath = path.join(__dirname, '../client/index.html');
    res.sendFile(filePath);
});

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});