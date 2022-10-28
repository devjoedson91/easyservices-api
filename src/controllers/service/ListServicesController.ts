import { Request, Response } from "express";
import { ListServicesService } from "../../services/service/ListServicesService";

class ListServicesController {

    async handle(req: Request, res: Response) {

        const listServicesController = new ListServicesService();

        const service = await listServicesController.execute();

        return res.json(service);

    }
}

export { ListServicesController }