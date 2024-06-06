// models/store.dao.js

import { pool } from "../../config/db.connect.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import {insertStoreSql, confirmPhone, getStoreID, getMapStoreID, 
    insertReviewSql, getReviewID, insertMissionSql, confirmMission, getMissionID} from "./store.sql.js"

// Store 데이터 삽입
export const addStore = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const [confirm] = await pool.query(confirmPhone, data.phone);
        if(confirm[0].isExistPhone){//phone이 이미 같은 전화번호가 있으면 -1
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

//리뷰추가
export const addReview = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        console.log(data);

        const result = await pool.query(insertReviewSql, [ data.user_id, data.store_id, data.content, data.grade, data.review_date]);
        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getReivew = async(reviewId) => {
    try {
        const conn = await pool.getConnection();
        const [review] = await pool.query(getReviewID, reviewId);

        console.log(review);

        if(review.length == 0){
            return -1;
        }

        conn.release();
        return review;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

//미션 추가
export const addMission = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        console.log(data);

        const [confirm] = await pool.query(confirmMission, [data.store_id, data.content]);
        if(confirm[0].isExistMission){//이미 같은 미션이 존재하면 -1
            conn.release();
            return -1;
        }

        const result = await pool.query(insertMissionSql, [ data.store_id, data.content, data.created_at, data.due_date, data.deadline_at, data.point]);
        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getMission = async(missionId) => {
    try {
        const conn = await pool.getConnection();
        const [mission] = await pool.query(getMissionID, missionId);

        console.log(mission);

        if(mission.length == 0){
            return -1;
        }

        conn.release();
        return mission;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}