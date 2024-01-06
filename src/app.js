const express = require('express');
const app = express();
const port=3000;

app.get('/product/:productId', (req, res) => {
  //Write a code here for endpoint /product/:productId and also print parameter in json form
  const productId=req.params.productId;
   res.status(200).json({
    "productId": productId
   })
});
app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`); 
});

module.exports = app;
