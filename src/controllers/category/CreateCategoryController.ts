import { Request, Response } from "express";
import { CreateCategoryService } from '../../services/category/CreateCategoryService';

class CreateCategoryController {

    async handle(req: Request, res: Response) {

        const { name, icon } = req.body;

        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute({ name, icon });

        return res.json(category);

    }

}

export { CreateCategoryController }