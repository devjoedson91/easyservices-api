import prismaClient from "../../prisma";

interface ServiceRequest {
    category_id: string;
}

class ListByCategoryService {
    async execute({category_id}: ServiceRequest) {

        const findByCategory = await prismaClient.service.findMany({
            where: {
                category_id: category_id
            }
        });

        return findByCategory;
    }
}

export { ListByCategoryService }