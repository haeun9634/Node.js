// models/store.sql.js

//가게추가
export const insertStoreSql = "INSERT INTO store (store_name, store_content, store_address, store_spec_address, store_phone) VALUES (?, ?, ?, ?, ?);";
//가게 id 존재 여부 확인
export const confirmStore = "SELECT EXISTS(SELECT 1 FROM store WHERE id = ?) AS isExistStore";

export const getStoreID = "SELECT * FROM store WHERE id = ?";
//중복된 가게 번호 확인
export const confirmPhone = "SELECT EXISTS(SELECT 1 FROM store WHERE store_phone = ?) as isExistPhone";

export const getMapStoreID = "SELECT * FROM store WHERE store_address = (SELECT store_address FROM store WHERE id = ?)";

//리뷰추가
export const insertReviewSql = "INSERT INTO review (user_id, store_id, review_content, grade, review_date) VALUES (?, ?, ?, ?, ?)";

export const getReviewID = "SELECT * FROM review WHERE id = ?";

//미션 추가
export const insertMissionSql = "INSERT INTO mission (store_id, content, created_at, due_date, deadline_at, mission_point) VALUES (?, ?, ?, ?, ?, ?)";

export const confirmMission = "SELECT EXISTS(SELECT 1 FROM mission WHERE store_id = ? AND content = ?) as isExistMission";

export const getMissionID = "SELECT * FROM mission WHERE id = ?";