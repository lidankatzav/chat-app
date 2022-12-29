import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.listen(4002, '0.0.0.0', () => {
    console.log('Server is running');
});


