const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
