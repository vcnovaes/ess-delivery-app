import express = require('express');
import { createPromotionController, getPromotionsController, getPromotionController, updatePromotionController } from '../controllers/PromotionsController';

export const promotionsRouter = express.Router()
    .get('/', getPromotionsController)

    .get('/:id', getPromotionController)

    .post('/', createPromotionController)

    .delete('/:id', (req, res) => {
        res.send(`Deleting promotion ${req.params}`)
    })

    .put('/:id', updatePromotionController)

