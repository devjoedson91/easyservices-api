import prismaClient from "../../prisma";

interface CategoryRequest {

    name: string;
    icon: string;

}

class CreateCategoryService {

    async execute({ name, icon }: CategoryRequest) {

        if (name === '') throw new Error('Name invalid');

        const category = await prismaClient.category.create({
            data: {
                name: name,
                icon: icon
            },
            select: {
                id: true,
                name: true
            }
            
        })

        return category;

    }
}

export { CreateCategoryService }