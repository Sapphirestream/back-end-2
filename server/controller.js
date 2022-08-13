const houses = require("./db.json");
let id = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },

  deleteHouse: (req, res) => {
    const { id } = req.params;
    console.log(id);

    const index = houses.findIndex((house) => house.id === +id);
    houses.splice(index, 1);

    res.status(200).send(houses);
  },

  createHouse: (req, res) => {
    const { price } = req.body;

    req.body.price = +price;
    req.body.id = id;
    houses.push(req.body);

    id++;
    res.status(200).send(houses);
  },

  updateHouse: (req, res) => {
    const { id } = req.params;
    const { type } = req.body;

    const index = houses.findIndex((house) => house.id === +id);

    if (type === "plus") {
      houses[index].price += 10000;
    } else {
      houses[index].price -= 10000;
    }

    res.status(200).send(houses);
  },
};
