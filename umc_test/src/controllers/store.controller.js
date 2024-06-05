// store.controller.js
import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinStore, joinReivew } from "../services/store.service.js";

export const newStore = async (req,res,next) => {
    console.log("가게 추가");
    console.log("body: ", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용
 
    res.send(response(status.SUCCESS, await joinStore(req.body)));
}

export const newReview = async (req,res,next) => {
    console.log("리뷰 추가");
    res.send(response(status.SUCCESS, await joinReivew(req.body)));
}