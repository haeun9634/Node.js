import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { storeResponseDTO } from "../dtos/store.dto.js"
import { addStore, getStore, mapStore } from "../models/store.dao.js";

export const joinStore = async (body) => { // 비동기 함수로 회원가입 로직을 정의 body는 클라이언트로부터 받은 사용자 정보

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
