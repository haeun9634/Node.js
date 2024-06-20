// user.route.js

import express from "express";
import asyncHandler from 'express-async-handler';

import { userSignin, userMission, viewReview, viewMission } from "../controllers/user.controller.js";

export const userRouter = express.Router();
//회원 추가
userRouter.post('/signin', asyncHandler(userSignin));
//특정 회원에 미션 추가
userRouter.post('/mission', asyncHandler(userMission));
//리뷰 조회 목록
userRouter.get('/reviews/:userId', asyncHandler(viewReview));
//도전중인 미션 목록
userRouter.get('/missions/:userId', asyncHandler(viewMission));
