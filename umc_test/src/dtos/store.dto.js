// dtos/store dto.js

// sign in response DTO
export const storeResponseDTO = (store) => {

    return {"phone": store[0].phone, "name": store[0].store_name, "content": store[0].store_content};
}