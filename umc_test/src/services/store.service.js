// store.service.js
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { storeResponseDTO, storeMissionDTO , storeReviewDTO } from "../dtos/store.dto.js"
import { addStore, mapStore,  addReview, getReivew,addMission, getMission } from "../models/store.dao.js";

//가게추가
export const joinStore = async (body) => { 

    const joinStoreData = await addStore({ // 가게 정보를 데이터베이스에 추가
        'name': body.name,
        'content': body.content,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone':body.phone
    });
    if(joinStoreData == -1){ // 전화번호가 존재할 경우 -1을 반환
        throw new BaseError(status.PHONE_ALREADY_EXIST); // 에러를 던짐
    }else{
    return storeResponseDTO(await mapStore(joinStoreData)); 

    }
}

//리뷰추가
export const joinReivew = async (body) => {
    //date는 현재 날짜
    const nowdate = new Date();
    
    const joinReviewData = await addReview({
        'user_id': body.user_id,
        'store_id': body.store_id,
        'content': body.content,
        'grade':body.grade,
        'review_date': nowdate
    });

    if(joinReviewData == -1){ //가게 ID가 존재하지 않을 경우 
        throw new BaseError(status.STORE_NOT_FOUND); // 에러를 던짐
    }
    //리뷰는 같은 사람이 같은 가게에 여러번 쓸 수 있음
    return storeReviewDTO(await getReivew(joinReviewData)); 


}

//미션추가

export const joinMission = async(body)=>{
    //생성 날짜는 현재 날짜
    const nowdate = new Date();
    //데드라인은 일주일 후로 설정
    const deaddate = new Date();
    deaddate.setDate(nowdate.getDate() + 7);

    // 데드라인과 현재 날짜의 차이를 계산하여 남은 날짜 변수 생성
    const remainingDays = Math.ceil((deaddate - nowdate) / (1000 * 60 * 60 * 24));

    const joinMissionData = await addMission({
        'store_id': body.store_id,
        'content': body.content,
        'created_at': nowdate,
        'due_date': remainingDays,
        'deadline_at': deaddate,
        'point': body.point
    });

    //같은가게의 같은 가격의 미션이 이미 존재한다면 -1 반환
    if(joinMissionData == -1){ 
        throw new BaseError(status.MISSION_ALREADY_EXIST); // 에러를 던짐
    }else{
    return storeMissionDTO(await getMission(joinMissionData)); 
    }
}