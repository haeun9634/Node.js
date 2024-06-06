// dtos/user.dto.js

// sign in response DTO
export const signinResponseDTO = (user, prefer) => {
    const preferFood = [];
    for (let i = 0; i < prefer[0].length; i++) {
        preferFood.push(prefer[0][i].f_category_name);
    }
    return {"email": user[0].email, "name": user[0].user_name, "preferCategory": preferFood};
}


// 사용자 미션 DTO
export const userMissionDTO = (mission) => {
    return {
        "id": mission[0].id,
        "content": mission[0].content,
        "store_id": mission[0].store_id,
        "point": mission[0].point,
        "due_date": mission[0].due_date
    };
};

// 사용자 미션 목록 DTO
export const userMissionsDTO = (missions) => {
    return missions.map(userMissionDTO);
};

// 사용자 미션 조회 응답 DTO
export const userMissionResponseDTO = (data) => {
    return {
        missions: userMissionsDTO(data)
    };
};