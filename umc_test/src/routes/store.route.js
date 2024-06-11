// store.route.js

import express from "express";
import asyncHandler from 'express-async-handler';
import { newStore, newReview , newMission, reviewPreview } from "../controllers/store.controller.js";

//export const storeRouter = express.Router();
export const storeRouter = express.Router({mergeParams: true});


storeRouter.post('/add', asyncHandler(newStore));

storeRouter.post('/review', asyncHandler(newReview));

storeRouter.post('/mission',asyncHandler(newMission));
//가게의 리뷰 목록 조회
storeRouter.get('/reviews/:storeId', asyncHandler(reviewPreview));