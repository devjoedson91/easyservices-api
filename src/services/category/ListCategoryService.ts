import prismaClient from "../../prisma";

class ListCategoryService {

    async execute() {

        const category = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true,
                icon: true
            }
        });

        return category;

    }

}

export { ListCategoryService }