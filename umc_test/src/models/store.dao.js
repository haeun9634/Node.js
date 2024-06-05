// models/store.dao.js

import { pool } from "../../config/db.connect.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import {insertStoreSql, confirmPhone, getStoreID, getMapStoreID} from "./store.sql.js"

// Store 데이터 삽입
export const addStore = async (data) => {
    try{
        const conn = await pool.getConnection();
        console.log(`data:phone ${data.phone}`);
        
        const [confirm] = await pool.query(confirmPhone, data.phone);
        if(confirm[0].isExistPhone){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertStoreSql, [ data.name, data.content, data.addr, data.specAddr, data.phone]);
        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 가게 정보 얻기
export const getStore = async (storeId) => {
    try {
        const conn = await pool.getConnection();
        const [store] = await pool.query(getStoreID, storeId);

        console.log(store);

        if(store.length == 0){
            return -1;
        }

        conn.release();
        return store;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const mapStore = async(storeId) =>{
    try {
        const conn = await pool.getConnection();
        const [store] = await pool.query(getMapStoreID, storeId);

        console.log(store);

        if(store.length == 0){
            return -1;
        }

        conn.release();
        return store;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
