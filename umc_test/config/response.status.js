// response.status.js

import { StatusCodes } from "http-status-codes";

export const status = {
    // success
    SUCCESS: {status: StatusCodes.OK, "isSuccess": true, "code": 2000, "message": "SUCCESS!"},

    // error
	// common err
    INTERNAL_SERVER_ERROR: {status: StatusCodes.INTERNAL_SERVER_ERROR, "isSuccess": false, "code": "COMMON000", "message": "서버 에러, 관리자에게 문의 바랍니다." },
    BAD_REQUEST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "COMMON001", "message": "잘못된 요청입니다." },
    UNAUTHORIZED: {status: StatusCodes.UNAUTHORIZED, "isSuccess": false, "code": "COMMON002", "message": "권한이 잘못되었습니다." },
    METHOD_NOT_ALLOWED: {status: StatusCodes.METHOD_NOT_ALLOWED, "isSuccess": false, "code": "COMMON003", "message": "지원하지 않는 Http Method 입니다." },
    FORBIDDEN: {status: StatusCodes.FORBIDDEN, "isSuccess": false, "code": "COMMON004", "message": "금지된 요청입니다." },
    NOT_FOUND : {status: StatusCodes.NOT_FOUND, "isSuccess": false, "code": "COMMON005", "message": "요청한 페이지를 찾을 수 없습니다. 관리자에게 문의 바랍니다."},

	// member err
    MEMBER_NOT_FOUND: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "MEMBER4001", "message": "사용자가 없습니다."},
    NICKNAME_NOT_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "MEMBER4002", "message": "닉네임은 필수입니다."},
    EMAIL_ALREADY_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "MEMBER4003", "message": "이미 존재하는 이메일입니다."}, 

    // article err
    ARTICLE_NOT_FOUND: {status: StatusCodes.NOT_FOUND, "isSuccess": false, "code": "ARTICLE4001", "message": "게시글이 없습니다."},

    
    // 사용자 관련 에러
    USER_NOT_FOUND: {status: StatusCodes.NOT_FOUND, "isSuccess": false, "code": "USER4002", "message": "사용자 정보를 찾을 수 없습니다."},
    PREFERENCE_SETTING_FAILED: {status: StatusCodes.INTERNAL_SERVER_ERROR, "isSuccess": false, "code": "USER5001", "message": "선호도 설정에 실패했습니다."},
    
    //서버 관련 에러
    PARAMETER_IS_WRONG: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "COMMON400", "message": "잘못된 파라미터입니다."},

    //가게 관련 에러
    PHONE_ALREADY_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "STORE4003", "message": "이미 존재하는 가게입니다."},
    STORE_NOT_FOUND: {status: StatusCodes.NOT_FOUND, "isSuccess": false, "code": "STORE4002", "message": "가게 정보를 찾을 수 없습니다."},
    
    //미션 중복 에러
    MISSION_ALREADY_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "MISSION4003", "message": "중복된 미션 입니다."},
    MISSION_NOT_FOUND: {stauts: StatusCodes.NOT_FOUND, "isSuccess": false, "code": "MISSION4002", "message": "미션 정보를 찾을 수 없습니다."}
};