import prismaClient from "../../prisma";

interface ReserveRequest {
    date: string;
    hour: string;
    user_id: string;
    service_id: string;    
}

class CreateReserveService {

    async execute({date, hour, user_id, service_id}: ReserveRequest) {

        const reserve = await prismaClient.reserve.create({
            data: {
                date: new Date(date),
                hour: hour,
                user_id: user_id,
                service_id: service_id
            }
        });

        return reserve;

    }

}
export { CreateReserveService }