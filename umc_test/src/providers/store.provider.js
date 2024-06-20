// store.provider.js

import {previewReviewResponseDTO, previewMissionResponseDTO} from "../dtos/store.dto.js";

import {getPreviewReview, getPreviewMission} from "../models/store.dao.js";

export const getReview = async (storeId, query) => {
    const {reviewId, size = 3} = query;
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, storeId));
}

export const getMission = async (storeId, query) => {
    console.log(query);
    let missionId, size;

    if (query.paging === "undefined" || query.paging === undefined || query.paging === null) {
        missionId = query.missionId;
        size = 3;
    } else {
        missionId = query.missionId;
        size = query.paging;
    }
    return previewMissionResponseDTO(await getPreviewMission(missionId, size, storeId));
}