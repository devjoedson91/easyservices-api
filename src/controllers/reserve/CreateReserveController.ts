import { Request, Response } from "express";
import { CreateReserveService } from "../../services/reserve/CreateReserveService";

class CreateReserveController {

    async handle(req: Request, res: Response) {

        const { date, hour, user_id, service_id } = req.body;

        const createReserveService = new CreateReserveService();

        const reserve = await createReserveService.execute({
            date, hour, user_id, service_id
        });

        return res.json(reserve);

    }

}

export {CreateReserveController}
