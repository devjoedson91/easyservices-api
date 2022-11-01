import { Request, Response } from "express";
import {ListReserveService} from '../../services/reserve/ListReserveService';

class ListReserveController {

    async handle(req: Request, res: Response) {

        const listReserveService = new ListReserveService();

        const reserve = await listReserveService.execute();

        return res.json(reserve);

    }

}

export { ListReserveController };