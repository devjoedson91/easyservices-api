import { Request, Response } from "express";

import {DetailUserReserveService} from "../../services/reserve/DetailUserReserveService";

class DetailUserReserveController {

    async handle(req: Request, res: Response) {

        const user_id = req.query.user_id as string;

        const detailUserReserveService = new DetailUserReserveService();

        const reserves = await detailUserReserveService.execute({user_id});

        return res.json(reserves);
    }

}

export {DetailUserReserveController}