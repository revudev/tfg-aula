"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Add Gzip
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = (0, express_1.default)();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express_1.default.json());
require("dotenv").config();
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
app.post("/enviarCorreo", (req, res) => {
    const { senderName, senderLastName, senderEmail, senderMessage } = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });
    const mailOptions = {
        from: req.body.senderEmail,
        to: process.env.GMAIL_USER,
        subject: "Aula Emprende mensaje de contacto:",
        html: `
      <p>Nombre: ${senderName} ${senderLastName}</p>
      <p>Email: ${senderEmail}</p>
      <p>Mensaje: ${senderMessage}</p>
    `,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error al enviar el correo");
        }
        else {
            console.log("Correo enviado: " + info.response);
            res.status(200).send("Correo enviado correctamente");
        }
    });
});
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT id, name, email, user_type FROM Users WHERE (name = ? OR email = ?) AND password = ?`;
    connection.query(query, [username, username, password], (error, results) => {
        if (error) {
            console.error("Error de la consulta:", error);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
        if (results.length > 0) {
            res.status(200).json({ message: "Login successful", user: results[0] });
        }
        else {
            res.status(401).json({ message: "Invalid user or password" });
        }
    });
});
app.post("/addEvent", (req, res) => {
    const { Date, Event, Description, id_user } = req.body;
    const query = `INSERT INTO Events (Date, Event, Description, id_user) VALUES (?, ?, ?, ?)`;
    connection.query(query, [Date, Event, Description, id_user], (error, results) => {
        if (error) {
            console.error("Error de la consulta:", error);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
        if (results.affectedRows > 0) {
            res.status(200).json({ message: "Evento agregado exitosamente!" });
        }
        else {
            res
                .status(401)
                .json({ message: "Parámetro inválido o este evento ya existe" });
        }
    });
});
app.get("/getEvent", (req, res) => {
    const query = `SELECT * FROM Events`;
    connection.query(query, (error, results) => {
        if (error) {
            console.error("Error de la consulta:", error);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
        if (results.length > 0) {
            res.status(200).json({ message: "Eventos encontrados", events: results });
        }
        else {
            res.status(401).json({ message: "No se encontraron eventos" });
        }
    });
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map