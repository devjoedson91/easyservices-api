import prismaClient from "../../prisma";

interface ScheduleRequest {
    date: string;
    hour: string;
    service_id: string
}

class CreateScheduleService {

    async execute({ date, hour, service_id }: ScheduleRequest) {

        if (hour === '') throw new Error('Hour invalid');

        const schedule = await prismaClient.timeService.create({
            data: {
                date: date,
                hour: hour,
                service_id: service_id
            },
            select: {
                id: true,
                date: true,
                hour: true,
                service_id: true
            }
            
        })

        return schedule;

    }
}

export { CreateScheduleService }