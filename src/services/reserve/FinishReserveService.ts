import prismaClient from "../../prisma";

interface ReserveRequest {
    reserve_id: string;
}

class FinishReserveService {

    async execute({reserve_id}: ReserveRequest){

        const reserve = await prismaClient.reserve.update({
            where: {
                id: reserve_id
            },
            data: {
                status: true,
                draft: false
            }
        });

        return reserve;

    }

}

export {FinishReserveService}