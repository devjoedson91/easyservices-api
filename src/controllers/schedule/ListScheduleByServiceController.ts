import { Request, Response } from "express";

import { ListScheduleByService } from "../../services/schedule/ListScheduleByService";

class ListScheduleByServiceController {

    async handle(req: Request, res: Response) {

        const service_id = req.query.service_id as string;

        const listByService = new ListScheduleByService();

        const schedule = await listByService.execute({service_id});

        return res.json(schedule);

    }
}

export { ListScheduleByServiceController }