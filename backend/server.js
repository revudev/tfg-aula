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

app.get('/login', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error interno del servidor');
    }
    res.send(data);
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error interno del servidor');
    }

    const users = JSON.parse(data).items;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) { res.status(200).json({ message: 'Login successful', user }); } 
    else {      res.status(401).json({ message: ' Invalid user or password' });
    }
  });
});

app.listen(port, () => { console.log(`Server listening at http://localhost:${port}`); });
