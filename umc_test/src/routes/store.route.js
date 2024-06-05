// store.route.js

import express from "express";
import asyncHandler from 'express-async-handler';
import { newStore } from "../controllers/store.controller.js";

export const storeRouter = express.Router();

storeRouter.post('/add', asyncHandler(newStore));