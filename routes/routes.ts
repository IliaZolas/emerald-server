import express, { Request, Response } from 'express';
import { Router } from 'express';
import {Calculator} from '../logic/calculator';

const routes: Router = express.Router();

routes.get('/', (req: Request, res: Response) => {
    res.send('Hello Emerald Stay');
});

routes.post('/calculate', async (req: Request, res: Response) => {
    try {
        await Calculator(req, res);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });
    }
});

export default routes;
