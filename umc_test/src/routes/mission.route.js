// mission.route.js

import express from 'express'; //express 모듈 임포트
import { showMission } from '../controllers/mission.controller.js';

export const missionRouter = express.Router();

missionRouter.get('/mission/:flag',showMission);

