import { PrismaClient, Promotions } from "@prisma/client";

export async function insertPromotion(promotion: Promotions) {
    const prisma = new PrismaClient()

    try {
        await prisma.promotions.create({
            data: promotion
        })
    } catch (error) {
        console.error(error)
        throw error(`Error on creation of ${promotion.name}`)
    }
}