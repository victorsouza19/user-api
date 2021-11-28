const express = require('express'),
app = express(),
router = require('./routes/routes');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/", router);

app.listen(8001, () => {
  console.log("Server is running.");
});