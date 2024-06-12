// mission.controller.js

import { status } from '../../config/response.status.js';
import { CheckID } from '../services/mission.service.js';
import { response } from '../../config/response.js';
import { BaseError } from '../../config/error.js';

export const showMission = async (req, res, next) => {
    try {
        console.log("/mission/" + req.params.flag);
        const result = await CheckID(req.params.flag);
        res.send(response(status.SUCCESS, result));
    } catch (error) {
        if (error instanceof BaseError) {
            res.status(error.data.status).send(response(error.data, null));
        } else {
            next(new BaseError(status.INTERNAL_SERVER_ERROR, error.message));
        }
    }
};
