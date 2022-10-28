import { Request, Response } from "express";
import { CreateServicesService } from '../../services/service/CreateServicesService';

class CreateServicesController {

    async handle(req: Request, res: Response) {

        const { name, price, category_id } = req.body;

        const createCategoryService = new CreateServicesService();

        const service = await createCategoryService.execute({ name, price, category_id });

        return res.json(service);

    }

}

export { CreateServicesController }