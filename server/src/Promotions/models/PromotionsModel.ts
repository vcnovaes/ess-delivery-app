import { PrismaClient, Promotion } from "@prisma/client";

export async function insertPromotion(promotion: Promotion) {
    const prisma = new PrismaClient()

    try {
        await prisma.promotion.create({
            data: promotion
        })
    } catch (error) {
        console.error(error)
        throw error(`Error on creation of ${promotion.name}`)
    }
    await prisma.$disconnect()
}

export async function getAllPromotions() {
    const prisma = new PrismaClient()

    try {
        return prisma.promotion.findMany()
    } catch (error) {
        console.error('Not possible to list promotions', error)
        throw error
    }
}