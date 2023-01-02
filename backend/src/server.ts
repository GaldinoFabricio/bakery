import express, { NextFunction, Request, Response } from 'express';

import 'reflect-metadata';
import 'express-async-errors';

import './shared/container';
import './database'
import { errors } from 'celebrate';
import { routes } from './routes/index.routes';
import AppError from './shared/errors/AppErrors';

const app = express();

app.use(express.json());

app.use(routes);

app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);

app.listen(3333, () => 'server is running on port 3333');