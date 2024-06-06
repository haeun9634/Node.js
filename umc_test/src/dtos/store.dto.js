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