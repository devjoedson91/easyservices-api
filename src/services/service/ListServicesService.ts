import prismaClient from "../../prisma";

class ListServicesService {

    async execute() {

        const services = await prismaClient.service.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                category_id: true
            }
        });

        return services;

    }

}

export { ListServicesService }