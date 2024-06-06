// mission.service.js

import { userIDResponseDTO } from "../dtos/mission.response.dto.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";

export const CheckID = async (flag) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (flag!=0) {
                resolve(userIDResponseDTO(flag));
            } else {
                reject(new BaseError(status.BAD_REQUEST, 'Invalid flag provided'));
            }
        }, 1000);
    });
};
