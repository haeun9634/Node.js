// models/store.sql.js

export const insertStoreSql = "INSERT INTO store (store_name, store_content, store_address, store_spec_address, store_phone) VALUES (?, ?, ?, ?, ?);";

export const getStoreID = "SELECT * FROM store WHERE id = ?";

export const confirmPhone = "SELECT EXISTS(SELECT 1 FROM store WHERE store_phone = ?) as isExistPhone";

export const getMapStoreID = "SELECT * FROM store WHERE store_address = (SELECT store_address FROM store WHERE id = ?)";
//id의 address와 같은 address인 가게들만 출력 