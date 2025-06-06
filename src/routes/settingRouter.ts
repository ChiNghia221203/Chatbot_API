import express from 'express';
import SettingController from '~/controllers/SettingController';
import checkAdmin from '~/middlewares/checkAdmin';
import { upload } from '~/middlewares/uploadImages';
import { verifyAccsesToken } from '~/utils/jwt';

const settingRouter = express.Router();

settingRouter.post('/', verifyAccsesToken, checkAdmin, SettingController.store);
settingRouter.get('/', verifyAccsesToken, checkAdmin, SettingController.index);

export default settingRouter;
