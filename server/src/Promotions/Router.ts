import { Router } from "express"
import PromotionsController from "./controller/PromotionsController"
let PromotionRouter = Router()

let promotionBaseRoute = "/promotions"
PromotionRouter
  .get(promotionBaseRoute, PromotionsController.getPromotions)
  .get(`${promotionBaseRoute}/:id`, PromotionsController.getPromotion)
  .post(promotionBaseRoute, PromotionsController.postPromotion)
  .delete(`${promotionBaseRoute}/:id`, PromotionsController.deletePromotion)
  .put(promotionBaseRoute, PromotionsController.putPromotion)

export default PromotionRouter

