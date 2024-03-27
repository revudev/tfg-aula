const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3000;

const corsOptions = { // Allow request from localhost:4200
  origin: "http://localhost:4200",
  optionsSuccessStatus: 204,
  methods: "GET, POST, PUT, DELETE", //For the future
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/login.php', (req, res) => {
  // Lee el archivo login.php
  fs.readFile('login.php', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error interno del servidor');
    }
    res.send(data);
  });
});

app.listen(port, () => { console.log(`Server listening at http://localhost:${port}`); });
