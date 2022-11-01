import prismaClient from "../../prisma";

interface ReserveRequest {
    reserve_id: string;
}

class RemoveReserveService {
    async execute({reserve_id}: ReserveRequest) {
        const reserve = await prismaClient.reserve.delete({
            where: {
                id: reserve_id
            }
        });

        return reserve;
    }
}

export { RemoveReserveService }