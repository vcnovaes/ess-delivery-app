import type { Request, Response } from "express";
import type { Promotions } from "@prisma/client";
import { insertPromotion } from "../models/PromotionsModels";

export function getPromotions(req: Request, res: Response) { }

export function getPromotion(req: Request, res: Response) { }

export function deletePromotion(req: Request, res: Response) { }

export function updatePromotion(req: Request, res: Response) { }

export async function createPromotion(req: Request, res: Response) {
    try {
        const promotion: Promotions = JSON.parse(req.body)
        await insertPromotion(promotion)
        res.send(200)
    } catch (error) {
        console.error(error)
        res.send(500)
        throw error('Insertion failed')
    }
}