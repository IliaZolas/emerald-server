import express, { Request, Response } from 'express';
import { Router } from 'express';

const routes: Router = express.Router();

// Index Routes

routes.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});

// Calculator Route

export default routes;