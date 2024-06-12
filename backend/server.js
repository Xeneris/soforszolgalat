if (process.env.NODE_ENV != "production") {
  require('dotenv').config();
};

const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const Mailjet = require('node-mailjet');
const connectToDb = require('./config/connectToDb');
const Cities = require('./models/cities');
const CityParts = require('./models/cityParts');
const CityPartFare = require('./models/cityPartFare');

const app = express();
app.use(express.json());

connectToDb();
app.use(cors());

const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE,
  {
    config: {},
    options: {}
  }
);

app.post("/send_mail", (req, res) => {
  console.log(req.body);
  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: "kornelmarko@hotmail.com",
          },
          To: [
            {
              Email: `${req.body.Email}`,
            }
          ],
          Subject: "Teszt",
          TextPart: `Név: ${req.body.Nev}\n\rTelefon: ${req.body.Telefon}\n\rNap: ${req.body.Nap}\n\rÓra: ${req.body.Ora}\n\rPerc: ${req.body.Perc}\n\rNap: ${req.body.Nap}\n\rAutó típus: ${req.body.AutoTipus}\n\rRendszám: ${req.body.Rendszam}\n\rSzín: ${req.body.Szin}\n\rÁtülő: ${req.body.Atulo}\n\rHonnan: ${req.body.Honnan}\n\rHova: ${req.body.Hova}\n\rKitérő: ${req.body.Kitero}\n\rMegjegyzés: ${req.body.Megjegyzes}`,
        }
      ]
    });
  res.json({ response: "ok" })
});


app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/cities", async (req, res) => {
  const cities = await Cities.distinct("city");

  res.json({ cities: cities });
});

app.get("/city_parts", async (req, res) => {
  const cityParts = await CityParts.distinct("city_part");

  res.json({ cityParts: cityParts });
});

app.get("/prices", async (req, res) => {
  const city = req.body.city
  const foundCity = await Cities.findOne({ city: city });

  res.json({ foundDistance: foundCity.distance });
});

app.post("/prices", async (req, res) => {
  const city = req.body.city
  const distance = await Cities.findOne({ city: city });

  res.json({ city: distance })
});

app.get("/city_part_prices", async (req, res) => {
  const cityOne = req.body.origin
  const cityTwo = req.body.destination
  const cityPartFare = await CityPartFare.findOne({ origin: cityOne, destination: cityTwo });

  res.json({ cityPart: cityPartFare });
});


app.post("/city_part_prices", async (req, res) => {
  const cityOne = req.body.origin
  const cityTwo = req.body.destination
  const cityPartFare = await CityPartFare.findOne({ origin: cityOne, destination: cityTwo });

  res.json({ cityPartFare: cityPartFare });
});

app.listen(process.env.PORT);

