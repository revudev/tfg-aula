// const fs = require("fs"); //api POSIX for read files 
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 3000;

const corsOptions = { // Allow request from localhost:4200
  origin: "http://localhost:4200",
  optionsSuccessStatus: 204,
  methods: "GET, POST, PUT, DELETE", //For the future
};

const connection = mysql.createConnection({
  host: "aula-emp.duckdns.org",
  user: "basico",
  password: "basico",
  database: "aula",
});

app.use(cors(corsOptions));
app.use(express.json());

connection.connect(
  (err) => {
    if (err) { console.error("Error al conectarse con la base de datos:", err); return; }
    console.log("Conectado correctamente con la bbdd");
  }
);
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const query = `SELECT * FROM Users WHERE name = ? AND password = ?`;

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
//----------------------------------------------------------------------------------------------------
//---------------------------------------Check username and password in db.json-----------------------
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
  
//   fs.readFile('db.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send('Error interno del servidor');
//     }
    
//     const users = JSON.parse(data).items;
//     const user = users.find(u => u.username === username && u.password === password);
    
//     if (user) { res.status(200).json({ message: 'Login successful', user }); } 
//     else {      res.status(401).json({ message: ' Invalid user or password' });}
//   });
// });
//---------------------------------------Check all users in db.json--------------------------------------
// app.get('/login', (req, res) => { // Check all users in db.json
//   fs.readFile('db.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send('Error interno del servidor');
//     }
//     res.send(data);
//   });
// });