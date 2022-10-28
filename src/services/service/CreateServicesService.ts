import prismaClient from "../../prisma";

interface ServicesRequest {
    name: string;
    price: string;
    category_id: string
}

class CreateServicesService {

    async execute({name, price, category_id}: ServicesRequest) {

        const service = await prismaClient.service.create({

            data: {
                name: name,
                price: price,
                category_id: category_id
            }

        });

        return service;

    }
}

export { CreateServicesService }