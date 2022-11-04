import prismaClient from "../../prisma";

interface ScheduleRequest {
    week_day: number;
    hour: string;
    service_id: string
}

class CreateScheduleService {

    async execute({ week_day, hour, service_id }: ScheduleRequest) {

        if (hour === '') throw new Error('Hour invalid');

        const schedule = await prismaClient.timeService.create({
            data: {
                week_day: week_day,
                hour: hour,
                service_id: service_id
            },
            select: {
                id: true,
                hour: true,
                service_id: true
            }
            
        })

        return schedule;

    }
}

export { CreateScheduleService }