import e from 'express';
import 'dotenv/config';
import filme_router from './routes/filme-route.js';
import router from './routes/filme-route.js';

const app = e();

app.use(e.json());

app.use('/Filme', filme_router);
app.listen(process.env.API_PORT, () => console.log(`servidor rodando`));
