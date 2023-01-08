import express = require('express');
import bodyParser = require("body-parser");
import { promotionsRouter } from './src/components/promotions/routes/PromotionsRouter';
import { CarService } from './src/cars-service';
import { Car } from './src/car';

var app = express();

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.use('/promotions', promotionsRouter);

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { app, server, closeServer }