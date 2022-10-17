import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// user routes

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);

// category routes

router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoryController().handle);

export { router };