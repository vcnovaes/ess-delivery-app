import { Request, Response } from "express";
import { Promotion } from "@prisma/client";
import { getAllPromotions, insertPromotion } from "../models/PromotionsModel";

export async function getPromotionsController(req: Request, res: Response) {
    try {
        const allPromotions = await getAllPromotions()
        res.send(allPromotions)
        res.sendStatus(200)
    } catch (error) {
        console.error('Not possible to list promotions', error)
        res.sendStatus(500)
    }
}

export function getPromotionController(req: Request, res: Response) { }

export function deletePromotionController(req: Request, res: Response) { }

export function updatePromotionController(req: Request, res: Response) { }

export async function createPromotionController(req: Request, res: Response) {
    try {
        const promotion: Promotion = req.body
        await insertPromotion(promotion)
        res.sendStatus(200)
    } catch (error) {
        console.error(error, 'Bad Request')
        res.sendStatus(400)
    }
}