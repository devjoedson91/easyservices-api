import prismaClient from "../../prisma";

class ListReserveService {

    async execute() {

        const reserve = await prismaClient.reserve.findMany({

            where: {
                status: false
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                users: true,
                services: true
            }

        });

        return reserve;

    }

}

export { ListReserveService }