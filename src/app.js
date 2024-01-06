const express = require('express');
const app = express();

app.get('/product/:productId', (req, res) => {
  //Write a code here for endpoint /product/:productId and also print parameter in json form
  const postId=req.params.productId;
  res.end(` "productId": "${postId}"`);
});

module.exports = app;
