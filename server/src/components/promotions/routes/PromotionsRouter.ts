import express = require('express');

const promotionsRouter = express.Router()
    .get('/', (req, res) => {
        res.send("Send all promotions");
    })
    .get('/:id', (req, res) => {
        const promotionId: number = req.params;
        res.send(`Sending info about promotion ${promotionId}`);
    })
    .post('/', (req, res) => {
        res.send("Creating one promotion");
    })
    .delete('/:id', (req, res) => {
        res.send(`Deleting promotion ${req.params}`)
    })
export { promotionsRouter }