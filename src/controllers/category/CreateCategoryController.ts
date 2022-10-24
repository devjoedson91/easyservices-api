import { Request, Response } from "express";
import { CreateCategoryService } from '../../services/category/CreateCategoryService';

class CreateCategoryController {

    async handle(req: Request, res: Response) {

        const { name } = req.body;

        const createCategoryService = new CreateCategoryService();

        if (!req.file) {
            throw new Error('error upload file');
        } else {

            const {originalname, filename: icon} = req.file;

            const category = await createCategoryService.execute({ name, icon });

            return res.json(category);

        }

    }

}

export { CreateCategoryController }