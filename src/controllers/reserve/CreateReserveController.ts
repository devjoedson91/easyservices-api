import { Request, Response } from "express";
import { CreateReserveService } from "../../services/reserve/CreateReserveService";

class CreateReserveController {

    async handle(req: Request, res: Response) {

        const { date } = req.body;

    }

}

export {CreateReserveController}
