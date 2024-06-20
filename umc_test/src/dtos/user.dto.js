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
      "id": mission.id,
      "content": mission.content,
      "store_id": mission.store_id,
      "point": mission.mission_point,
      "due_date": mission.due_date
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



export const previewReviewResponseDTO = (data) => {

    const reviews = [];
    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "user_name": data[i].user_name,
            "grade": data[i].grade,
            "review_content": data[i].review_content,
            "create_date": formatDate(data[i].review_date)
        })
    }
    return {"reviewData": reviews, "cursorId": data[data.length-1].id};
}

export const previewMissionResponseDTO = (data) => {
    const missions = [];
    console.log(data);
    if (data===null || data==="undefined" || data===undefined || data.length===0) {
        throw new BaseError({
            status: 500, // 유효한 상태 코드 사용
            isSuccess: false,
            code: "MISSION4002",
            message: "미션 정보를 찾을 수 없습니다."
          });
    }
    for (let i = 0; i < data.length; i++) {
        missions.push({
            "store_name": data[i].store_name,
            "missionId": data[i].id,
            "content": data[i].content,
            "due_date":data[i].due_date,
            "point": data[i].mission_point,
        })
    }
    return {"missionData": missions, "cursorId": data[data.length-1].id};
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