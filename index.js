const express = require('express');
let cors = require('cors');
const { resolve } = require('path');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.static('static'));

app.get('/calculate-returns', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const marketPrice = parseFloat(req.query.marketPrice);
  const quantity = parseInt(req.query.quantity);

  const returnValue = (marketPrice - boughtAt) * quantity;
  res.send(returnValue.toString());
});

app.get('/total-returns', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);

  const totalReturnValue = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturnValue.toString());
});

app.get('/calculate-return-percentage', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const returns = parseFloat(req.query.returns);

  const returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

app.get('/total-return-percentage', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);

  const totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturnPercentage.toString());
});

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  let status;
  if (returnPercentage > 0) {
    status = 'profit';
  } else {
    status = 'loss';
  }
  res.send(status);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
