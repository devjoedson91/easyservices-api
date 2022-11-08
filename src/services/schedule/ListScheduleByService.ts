import prismaClient from "../../prisma";

interface ScheduleRequest {
    service_id: string;
}

class ListScheduleByService {
    async execute({service_id}: ScheduleRequest) {

        const findByService = await prismaClient.timeService.findMany({
            where: {
                service_id: service_id
            },
            orderBy: {
                hour: 'asc'
            }
        });

        return findByService;
    }
}

export { ListScheduleByService }