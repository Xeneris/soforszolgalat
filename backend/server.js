if (process.env.NODE_ENV != "production") {
  require('dotenv').config();
};

const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
const express = require('express');
const Mailjet = require('node-mailjet');
const connectToDb = require('./config/connectToDb');
const Cities = require('./models/cities');
const CityParts = require('./models/cityParts');
const CityPartFare = require('./models/cityPartFare');

const app = express();
app.use(express.json());
app.use(express.static('/root/soforszolgalat/frontend/build'));

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

const privateKey = fs.readFileSync('/etc/letsencrypt/live/zenit-soforszolgalat.hu-0001/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/zenit-soforszolgalat.hu-0001/fullchain.pem', 'utf8');

const credentials = {
  key: privateKey,
  cert: certificate
};

app.post("/api/send_confirmation_mail", (req, res) => {

  const emailBody = `
    <h2>Foglalás visszaigazolás</h2>
    <p>Kedves ${req.body.Nev},</p>
    <p>Köszönjük, hogy foglalást tett nálunk. Az alábbiakban találhatja a foglalás részleteit:</p>
    <table style="border-collapse: collapse; width: 100%;">
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;"><strong>Név:</strong></td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${req.body.Nev}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;"><strong>Telefon:</strong></td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${req.body.Telefon}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;"><strong>Nap:</strong></td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${req.body.Nap}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;"><strong>Óra:</strong></td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${req.body.Ora}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;"><strong>Perc:</strong></td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${req.body.Perc}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;"><strong>Autó típus:</strong></td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${req.body.AutoTipus}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;"><strong>Rendszám:</strong></td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${req.body.Rendszam}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;"><strong>Szín:</strong></td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${req.body.Szin}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;"><strong>Átülő:</strong></td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${req.body.Atulo}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;"><strong>Honnan:</strong></td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${req.body.Honnan}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;"><strong>Hova:</strong></td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${req.body.Hova}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;"><strong>Kitérő:</strong></td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${req.body.Kitero}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;"><strong>Megjegyzés:</strong></td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${req.body.Megjegyzes}</td>
      </tr>
    </table>
    <p>Üdvözlettel,<br/>Zenit Sofőrszolgálat</p>
  `;

  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: "soforszolgalatzenit@gmail.com",
            Name: "Zenit Sofőrszolgálat"
          },
          To: [
            {
              Email: req.body.Email,
              Name: req.body.Nev
            }
          ],
          Subject: "Foglalás visszaigazolás",
          HTMLPart: emailBody,
        }
      ]
    });

  res.json({ response: "ok" })
});


app.post("/api/send_mail", (req, res) => {
  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: "soforszolgalatzenit@gmail.com",
          },
          To: [
            {
              Email: `soforszolgalatzenit@gmail.com`,
            }
          ],
          Subject: "Értesítés foglalásról",
          HTMLPart: `
    <h2>Foglalás adatok</h2>
    <p><strong>Név:</strong> ${req.body.Nev}</p>
    <p><strong>Telefon:</strong> ${req.body.Telefon}</p>
    <p><strong>Nap:</strong> ${req.body.Nap}</p>
    <p><strong>Óra:</strong> ${req.body.Ora}</p>
    <p><strong>Perc:</strong> ${req.body.Perc}</p>
    <p><strong>Autó típus:</strong> ${req.body.AutoTipus}</p>
    <p><strong>Rendszám:</strong> ${req.body.Rendszam}</p>
    <p><strong>Szín:</strong> ${req.body.Szin}</p>
    <p><strong>Átülő:</strong> ${req.body.Atulo}</p>
    <p><strong>Honnan:</strong> ${req.body.Honnan}</p>
    <p><strong>Hova:</strong> ${req.body.Hova}</p>
    <p><strong>Kitérő:</strong> ${req.body.Kitero}</p>
    <p><strong>Megjegyzés:</strong> ${req.body.Megjegyzes}</p>
  `,
        }
      ]
    });
  res.json({ response: "ok" })
});


app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/api/cities", async (req, res) => {
  const cities = await Cities.distinct("city");

  res.json({ cities: cities });
});

app.get("/api/city_parts", async (req, res) => {
  const cityParts = await CityParts.distinct("city_part");

  res.json({ cityParts: cityParts });
});

app.get("/api/prices", async (req, res) => {
  const city = req.body.city
  const foundCity = await Cities.findOne({ city: city });

  res.json({ foundDistance: foundCity.distance });
});

app.post("/api/prices", async (req, res) => {
  const city = req.body.city
  const distance = await Cities.findOne({ city: city });

  res.json({ city: distance })
});

app.get("/api/city_part_prices", async (req, res) => {
  const cityOne = req.body.origin
  const cityTwo = req.body.destination
  const cityPartFare = await CityPartFare.findOne({ origin: cityOne, destination: cityTwo });

  res.json({ cityPart: cityPartFare });
});


app.post("/api/city_part_prices", async (req, res) => {
  const cityOne = req.body.origin
  const cityTwo = req.body.destination
  const cityPartFare = await CityPartFare.findOne({ origin: cityOne, destination: cityTwo });

  res.json({ cityPartFare: cityPartFare });
});

app.get('*', (req, res) => {
  res.sendFile('/root/soforszolgalat/frontend/build/index.html');
});

app.listen(process.env.PORT);

