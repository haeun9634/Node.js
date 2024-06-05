import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { storeResponseDTO } from "../dtos/store.dto.js"
import { addStore, getStore, mapStore,  addReview, getReivew } from "../models/store.dao.js";

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
    //리뷰는 같은 사람이 같은 가게에 여러번 쓸 수 있으므로 
    return storeResponseDTO(await getReivew(joinReviewData)); 


}