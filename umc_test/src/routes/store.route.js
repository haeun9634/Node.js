// store.route.js

import express from "express";
import asyncHandler from 'express-async-handler';
import { newStore, newReview , newMission, reviewPreview, missionPreview } from "../controllers/store.controller.js";

//export const storeRouter = express.Router();
export const storeRouter = express.Router({mergeParams: true});

//가게 추가
storeRouter.post('/add', asyncHandler(newStore));
//가게에 리뷰 추가
storeRouter.post('/review', asyncHandler(newReview));
//가게의 미션 추가
storeRouter.post('/mission',asyncHandler(newMission));
//가게의 리뷰 목록 조회
storeRouter.get('/reviews/:storeId', asyncHandler(reviewPreview));
//가게의 미션 목록 조회
storeRouter.get('/missions/:storeId', asyncHandler(missionPreview));