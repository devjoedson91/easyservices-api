import { Request, Response } from "express";

import { CreateScheduleService } from "../../services/schedule/CreateScheduleService";

class CreateScheduleController {
    async handle(req: Request, res: Response) {
        const {week_day, hour, service_id} = req.body;

        const createScheduleController = new CreateScheduleService();

        const schedule = await createScheduleController.execute({week_day, hour, service_id});

        return res.json(schedule);
    }
}

export { CreateScheduleController }