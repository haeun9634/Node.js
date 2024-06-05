// store.route.js

import express from "express";
import asyncHandler from 'express-async-handler';
import { newStore, newReview } from "../controllers/store.controller.js";

export const storeRouter = express.Router();

storeRouter.post('/add', asyncHandler(newStore));

storeRouter.post('/review', asyncHandler(newReview));