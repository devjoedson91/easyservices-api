import { Request, Response } from "express";

import { RemoveReserveService } from "../../services/reserve/RemoveReserveService";

class RemoveReserveController {

    async handle(req: Request, res: Response) {
        const reserve_id = req.query.reserve_id as string;

        const removeReserve = new RemoveReserveService();

        const reserve = await removeReserve.execute({reserve_id});

        return res.json(reserve);
    }

}

export {RemoveReserveController}