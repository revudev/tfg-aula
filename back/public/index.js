"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const mysql = require("mysql");
const app = (0, express_1.default)();
const port = 4000;
const corsOptions = {
    origin: "http://localhost:4200", // https://aula-emp.vercel.app
    optionsSuccessStatus: 204,
    methods: "GET, POST, PUT, DELETE"
};
app.use(cors(corsOptions));
app.use(express_1.default.json());
require('dotenv').config();
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});
connection.connect((err) => {
    if (err) {
        console.error("Error al conectarse con la base de datos:", err);
        return;
    }
    console.log("Conectado correctamente con la bbdd");
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT id, name, email, user_type FROM Users WHERE name = ? AND password = ?`;
    connection.query(query, [username, password], (error, results) => {
        if (error) {
            console.error("Error de la consulta:", error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
        if (results.length > 0) {
            res.status(200).json({ message: 'Login successful', user: results[0] });
        }
        else {
            res.status(401).json({ message: 'Invalid user or password' });
        }
    });
});
app.post('/addEvent', (req, res) => {
    const { Date, Event, Description, id_user } = req.body;
    const query = `INSERT INTO Events (Date, Event, Description, id_user) VALUES (?, ?, ?, ?)`;
    connection.query(query, [Date, Event, Description, id_user], (error, results) => {
        if (error) {
            console.error("Error de la consulta:", error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
        if (results.affectedRows > 0) {
            res.status(200).json({ message: 'Evento agregado exitosamente!' });
        }
        else {
            res.status(401).json({ message: 'Parámetro inválido o este evento ya existe' });
        }
    });
});
app.get('/getEvent', (req, res) => {
    const query = `SELECT * FROM Events`;
    connection.query(query, (error, results) => {
        if (error) {
            console.error("Error de la consulta:", error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
        if (results.length > 0) {
            res.status(200).json({ message: 'Eventos encontrados', events: results });
        }
        else {
            res.status(401).json({ message: 'No se encontraron eventos' });
        }
    });
});
app.listen(port, () => { console.log(`Server listening at http://localhost:${port}`); });
module.exports = app;
//# sourceMappingURL=index.js.map