import { Request, Response } from "express";

import { CreateScheduleService } from "../../services/schedule/CreateScheduleService";

class CreateScheduleController {
    async handle(req: Request, res: Response) {
        const {date, hour, service_id} = req.body;

        const createScheduleController = new CreateScheduleService();

        const schedule = await createScheduleController.execute({date, hour, service_id});

        return res.json(schedule);
    }
}

export { CreateScheduleController }