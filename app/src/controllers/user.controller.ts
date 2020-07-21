import { NextFunction, Request, Response } from 'express';
import asyncHandler from '../utils/asyncHandler';

export const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('Register user');
  },
);