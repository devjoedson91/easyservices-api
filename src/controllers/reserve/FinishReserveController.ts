import { Request, Response } from "express";

import { FinishReserveService } from "../../services/reserve/FinishReserveService";

class FinishReserveController {

    async handle(req: Request, res: Response) {

        const { reserve_id } = req.body;

        const finishReserveService = new FinishReserveService();

        const reserve = await finishReserveService.execute({reserve_id});

        return res.json(reserve);

    }

}

export {FinishReserveController}