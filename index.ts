import express, { Express } from 'express';
import dotenv from 'dotenv';
import routesUrls from './routes/routes';
import cors, { CorsOptions } from 'cors';
import bodyParser from 'body-parser';

dotenv.config() 
const app: Express = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 4000;


const corsOptions: CorsOptions = {
  origin: ['https://emerald-client-production.up.railway.app','http://localhost:4200'],
  credentials: true,
  allowedHeaders: ['Origin', 'Content-Type', 'Authorization', 'x-csrf-token', 'Accept'],
  exposedHeaders: ['Authorization' ] 
};


  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/', routesUrls);
