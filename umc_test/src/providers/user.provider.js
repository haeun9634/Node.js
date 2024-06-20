// user.provider.js

import {previewReviewResponseDTO, previewMissionResponseDTO} from "../dtos/user.dto.js";

import {getPreviewReview, getPreviewMission} from "../models/user.dao.js";

export const getReview = async (userId, query) => {
    const {reviewId, size = 3} = query;
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, userId));
}

export const getMission = async (userId, query) =>{
    console.log(query);
    let missionId, size;

    if (query.paging === "undefined" || query.paging === undefined || query.paging === null) {
        missionId = query.missionId;
        size = 3;
    } else {
        missionId = query.missionId;
        size = query.paging;
    }
    return previewMissionResponseDTO(await getPreviewMission(missionId, size, userId));
}