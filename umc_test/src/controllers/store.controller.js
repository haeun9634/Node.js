// store.controller.js
import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinStore, joinReivew, joinMission } from "../services/store.service.js";
import {getReview} from "../providers/store.provider.js";
export const newStore = async (req,res,next) => {
    console.log("가게 추가");
    console.log("body: ", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용
 
    res.send(response(status.SUCCESS, await joinStore(req.body)));
}

export const newReview = async (req,res,next) => {
    console.log("리뷰 추가");
    res.send(response(status.SUCCESS, await joinReivew(req.body)));
}

export const newMission = async (req,res, next)=>{
    console.log("가게에 미션 추가");
    res.send(response(status.SUCCESS, await joinMission(req.body)));
}

export const reviewPreview = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await getReview(req.params.storeId, req.query)));
}