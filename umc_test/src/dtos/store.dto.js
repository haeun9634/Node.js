// dtos/store dto.js


export const storeResponseDTO = (store) => {

    return {"phone": store[0].phone, "name": store[0].store_name, "content": store[0].store_content};
}

export const storeReviewDTO = (review) => {
    return {"content": review[0].content, "grade": review[0].grade};
}