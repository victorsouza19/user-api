const express = require('express'),
app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.listen(8001, () => {
  console.log("Server is running.");
});