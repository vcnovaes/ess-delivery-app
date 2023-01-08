import express = require('express');
import { createPromotion, getPromotion, getPromotions, updatePromotion } from '../controllers/PromotionsController';

const promotionsRouter = express.Router()
    .get('/', getPromotions)

    .get('/:id', getPromotion)

    .post('/', createPromotion)

    .delete('/:id', (req, res) => {
        res.send(`Deleting promotion ${req.params}`)
    })

    .put('/:id', updatePromotion)


export { promotionsRouter }