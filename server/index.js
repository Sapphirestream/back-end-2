const express = require("express");
const cors = require("cors");

const app = express();
const port = 4004;

app.use(express.json());
app.use(cors());
//SET UP

const {
  getHouses,
  createHouse,
  deleteHouse,
  updateHouse,
} = require("./controller");

//ENDPOINTS
app.get("/api/houses", getHouses);
app.post("/api/houses", createHouse);
app.delete("/api/houses/:id", deleteHouse);
app.put("/api/houses/:id", updateHouse);

//END
app.listen(port, () => console.log(`Server running on ${port}`));
