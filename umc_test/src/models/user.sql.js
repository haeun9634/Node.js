// models/user.sql.js

export const insertUserSql = "INSERT INTO user (email, name, gender, birth, address, user_spec_address, phonenumber) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM user WHERE id = ?";

export const connectFoodCategory = "INSERT INTO user_favor_category (f_category_id, user_id) VALUES (?, ?);";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail";

export const getPreferToUserID =
"SELECT ufc.uf_category_id, ufc.f_category_id, ufc.user_id, fcl.f_category_name "
+ "FROM user_favor_category ufc JOIN food_category_list fcl on ufc.f_category_id = fcl.f_category_id "
+ "WHERE ufc.user_id = ? ORDER BY ufc.f_category_id ASC;";


export const confirmUserMission = "SELECT EXISTS(SELECT 1 FROM mission_table WHERE user_id = ? AND mission_id = ?) as isExistMission";

export const insertUserMissionSql = "INSERT INTO mission_table (user_id, mission_id, complete) VALUES (?, ?, 0)";


//도전중인 미션 조회하는 함수
export const UserMission = "SELECT m.* " +
                             "FROM mission_table mt " +
                             "JOIN mission m ON mt.mission_id = m.id " +
                             "WHERE mt.user_id = ? AND mt.complete = 0";


export const getReviewByReviewId = 
"SELECT u.name, u.id, r.id, r.grade, r.review_content, r.review_date "
+ "FROM review r JOIN user u on r.user_id = u.id  "
+ "WHERE r.user_id = ? AND r.id < ? "
+ "ORDER BY r.id DESC LIMIT ? ;"

export const getReviewByReviewIdAtFirst = 
"SELECT u.name, u.id, r.id, r.grade, r.review_content, r.review_date "
+ "FROM review r JOIN user u on r.user_id = u.id  "
+ "WHERE r.user_id = ? "
+ "ORDER BY r.id DESC LIMIT ? ;"


export const getMissionByMissionId = 
"SELECT u.name, u.id, m.id, m.content, m.due_date, m.mission_point "
+ "FROM mission_table mt "
+ "JOIN mission m ON mt.mission_id = m.id "
+ "JOIN user u ON mt.user_id = u.id "
+ "WHERE mt.user_id = ? AND m.id < ? AND mt.complete = 0 "
+ "ORDER BY m.id DESC LIMIT ? ;"

export const getMissionByMissionIdAtFirst = 
"SELECT u.name, u.id, m.id, m.content, m.due_date, m.mission_point "
+ "FROM mission_table mt "
+ "JOIN mission m ON mt.mission_id = m.id "
+ "JOIN user u ON mt.user_id = u.id "
+ "WHERE mt.user_id = ? AND mt.complete = 0 "
+ "ORDER BY m.id DESC LIMIT ? ;"


//미션 완료하는 함수
export const missionComplete = "UPDATE mission_table SET complete = 1 WHERE user_id = ? AND mission_id = ? ;";
//미션 완료시 유저의 포인트를 증가시켜주는 함수
export const addUserPoint = "UPDATE user SET point = point + (SELECT mission.mission_point " +
"FROM mission_table " +
"JOIN mission ON mission_table.mission_id = mission.id " +
"WHERE mission_table.user_id = ? AND mission_table.mission_id = ? AND mission_table.complete = 1) " +
"WHERE id = ? ;";