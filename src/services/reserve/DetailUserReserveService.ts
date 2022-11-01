import prismaClient from "../../prisma";

interface DetailRequest {
    user_id: string;
}

class DetailUserReserveService {

    async execute({user_id}: DetailRequest) {

        const reserves = await prismaClient.reserve.findMany({
            where: {
                user_id: user_id
            },
            include: {
                users: true,
                services: true
            }
        });

        return reserves;
    }
}

export { DetailUserReserveService }
