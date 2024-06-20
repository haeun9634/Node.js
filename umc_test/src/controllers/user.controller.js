// user.controller.js
import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinUser, userjoinMission } from "../services/user.service.js";
import { getReview, getMission} from "../providers/user.provider.js";

export const userSignin = async (req,res,next) => {//회원가입 요청 처리
    console.log("회원가입을 요청하였습니다");
    console.log("body: ", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용
 
    res.send(response(status.SUCCESS, await joinUser(req.body)));
}

export const userMission = async (req,res,next) => {
    console.log("사용자에게 미션을 추가합니다. ");
    res.send(response(status.SUCCESS, await userjoinMission(req.body)));
}

export const viewReview = async(req,res, next)=>{
    console.log("해당 사용자의 리뷰들을 조회합니다.");
    res.send(response(status.SUCCESS,await getReview(req.params.userId, req.query)));
}

export const viewMission = async(req,res)=>{
    console.log("도전중인 미션을 조회합니다.");
    res.send(response(status.SUCCESS, await getMission(req.params.userId, req.query)));
}