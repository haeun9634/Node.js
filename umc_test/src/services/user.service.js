import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { signinResponseDTO } from "../dtos/user.dto.js"
import { addUser, getUser, getUserPreferToUserID, setPrefer } from "../models/user.dao.js";

export const joinUser = async (body) => { // 비동기 함수로 회원가입 로직을 정의 body는 클라이언트로부터 받은 사용자 정보
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay); // 생년월일 정보를 이용하여 Date 객체를 생성
    const prefer = body.prefer; // 사용자의 선호 정보를 변수에 저장

    const joinUserData = await addUser({ // addUser 함수를 호출하여 사용자 정보를 데이터베이스에 추가
        'email': body.email,
        'name': body.name,
        'gender': body.gender,
        'birth': birth,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone
    });

    if(joinUserData == -1){ // 이메일이 이미 존재할 경우 -1을 반환
        throw new BaseError(status.EMAIL_ALREADY_EXIST); // 에러를 던짐
    }else{
        for (let i = 0; i < prefer.length; i++) { // 사용자의 선호 카테고리 정보를 데이터베이스에 추가
            console.log(`${prefer}`)
            await setPrefer(joinUserData, prefer[i]);;
        }
        return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData)); 
        // 최종적으로 사용자 정보와 선호 카테고리 정보를 포맷하여 반환
    }
}
