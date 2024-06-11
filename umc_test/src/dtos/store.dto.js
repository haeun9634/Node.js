// dtos/store dto.js

import { getStore } from "../models/store.dao.js";

export const storeResponseDTO = (store) => {

    return {"phone": store[0].phone, "name": store[0].store_name, "content": store[0].store_content};
}

export const storeReviewDTO = (review) => {
    return {"content": review[0].content, "grade": review[0].grade};
}

export const storeMissionDTO = (mission) => {
    const store = getStore(mission[0].store_id);
    console.log(store);
    return {"store": store.name, "content": mission[0].content, "point": mission[0].point };
}


export const previewReviewResponseDTO = (data) => {
    const reviews = [];
    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "user_name": data[i].user_name,
            "rate": data[i].grade,
            "review_body": data[i].review_content,
            "create_date": formatDate(data[i].review_date)
        })
    }
    return {"reviewData": reviews, "cursorId": data[data.length-1].id};
}

const formatDate = (date) => {
    // 날짜 값이 올바른 형식인지 확인
    const validDate = new Date(date);
    if (isNaN(validDate.getTime())) {
        // 날짜 값이 유효하지 않은 경우 에러 처리
        throw new Error('Invalid date format');
    }

    // 날짜 값이 유효한 경우 포맷팅
    return new Intl.DateTimeFormat('kr').format(validDate).replaceAll(" ", "").slice(0, -1);
}