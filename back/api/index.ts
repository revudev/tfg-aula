import express from "express";
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 4000;

const corsOptions = { 
  origin: "leid04.github.io/tfg-aula",
  optionsSuccessStatus: 204,
  methods: "GET, POST, PUT, DELETE",
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect(
  (err) => {
    if (err) { console.error("Error al conectarse con la base de datos:", err); return; }
    console.log("Conectado correctamente con la bbdd");
  }
);
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const query = `SELECT id, name, email, user_type FROM Users WHERE name = ? AND password = ?`;

  connection.query(query, [username, password], (error, results) => {
    if (error) {
      console.error("Error de la consulta:", error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }

    if (results.length > 0) { res.status(200).json({ message: 'Login successful', user: results[0] }); } 
    else { res.status(401).json({ message: 'Invalid user or password' }); }

  });
});

app.listen(port, () => { console.log(`Server listening at http://localhost:${port}`); });
module.exports = app;