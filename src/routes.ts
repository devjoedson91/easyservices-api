import { Router } from "express";
import multer from "multer";
import uploadConfig from './config/multer';

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { CreateServicesController } from "./controllers/service/CreateServicesController";
import { ListServicesController } from "./controllers/service/ListServicesController";
import { ListByCategoryController } from "./controllers/service/ListByCategoryController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

// user routes

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);

// category routes

router.post('/category', isAuthenticated, upload.single('file'), new CreateCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoryController().handle);

// services routes

router.post('/service', isAuthenticated, new CreateServicesController().handle);
router.get('/service', isAuthenticated, new ListServicesController().handle);
router.get('/category/service', isAuthenticated, new ListByCategoryController().handle);

export { router };