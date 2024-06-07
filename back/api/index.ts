import express from "express";

// Gzip
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 4000;

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// Only in local development
import cors from "cors";
app.use(
  cors({
    origin: "http://localhost:4200",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectTimeout: 10000,
  acquireTimeout: 10000,
  waitForConnections: true,
  queueLimit: 0,
});

const executeQuery = (query, params, res, successMessage) => {
  pool.query(query, params, (err, result) => {
    if (err) {
      console.error("Error al ejecutar la consulta:", err);
      if (
        err.code === "PROTOCOL_CONNECTION_LOST" ||
        err.code === "ECONNREFUSED"
      ) {
        return res.status(503).json({
          message:
            "Servicio no disponible. Por favor, inténtelo de nuevo más tarde.",
        });
      }
      return res
        .status(500)
        .json({ message: "Error al ejecutar la consulta." });
    }
    if (successMessage) {
      res.status(200).json({ message: successMessage });
    } else {
      res.status(200).json(result);
    }
  });
};

app.post("/deleteComment", (req, res) => {
  const { id } = req.body;
  const deleteCommentSql = "DELETE FROM Comments WHERE id = ?";
  executeQuery(
    deleteCommentSql,
    [id],
    res,
    "Comentario eliminado correctamente."
  );
});

app.post("/getPlan", (req, res) => {
  const id = req.body.id;

  const getPlanSql = "SELECT * FROM BusinessPlans WHERE user_id = ?";
  pool.query(getPlanSql, [id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error al obtener el plan del usuario." });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "El usuario no tiene un plan." });
    }

    const plan = {
      iniciativa: result[0].iniciativa.split(", "),
      mercadoMarketing: result[0].mercadoMarketing.split(", "),
      gestiones: result[0].gestiones.split(", "),
      id: result[0].id,
    };

    res.status(200).json(plan);
  });
});

app.get("/getAllPlan", (req, res) => {
  const getPlanSql = `
    SELECT bp.id, bp.iniciativa, bp.mercadoMarketing, bp.gestiones, us.name
    FROM BusinessPlans AS bp
    JOIN Users AS us ON bp.user_id = us.id;
  `;

  pool.query(getPlanSql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error al obtener los planes." });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "No hay planes." });
    }

    const planes = result.map((row) => ({
      idPlan: row.id,
      iniciativa: row.iniciativa.split(", "),
      mercadoMarketing: row.mercadoMarketing.split(", "),
      gestiones: row.gestiones.split(", "),
      name: row.name,
    }));

    res.status(200).json(planes);
  });
});

app.post("/sendComment", (req, res) => {
  const { planId, text, user_publish } = req.body;
  const checkCommentSql =
    "SELECT * FROM Comments WHERE plan_id = ? AND user_publish = ?";
  pool.query(checkCommentSql, [planId, user_publish], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error al comprobar el comentario." });
    }
    if (results.length > 0) {
      const updateCommentSql =
        "UPDATE Comments SET content = ? WHERE plan_id = ? AND user_publish = ?";
      pool.query(
        updateCommentSql,
        [text, planId, user_publish],
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Error al actualizar el comentario." });
          }
          res
            .status(200)
            .json({ message: "Comentario actualizado correctamente." });
        }
      );
    } else {
      const insertCommentSql =
        "INSERT INTO Comments (plan_id, content, user_publish) VALUES (?, ?, ?)";

      pool.query(
        insertCommentSql,
        [planId, text, user_publish],
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Error al insertar el comentario." });
          }
          res
            .status(200)
            .json({ message: "Comentario insertado correctamente." });
        }
      );
    }
  });
});

app.post("/getComments", (req, res) => {
  const { id } = req.body;
  const showCommentSql = `
    SELECT co.id, co.content, co.publication_date, us.name AS user_name
    FROM Comments co
    JOIN BusinessPlans bs ON co.plan_id = bs.id
    JOIN Users us ON co.user_publish = us.id
    WHERE bs.user_id = ?;
  `;
  pool.query(showCommentSql, [id], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error al obtener los comentarios." });
    }
    res.status(200).json(results);
  });
});

app.post("/savePlan", (req, res) => {
  const {
    user_id,
    selections: {
      "Iniciativa emprendedora": iniciativa,
      "Mercado y Marketing": mercadoMarketing,
      Gestiones: gestiones,
    },
  } = req.body;
  const checkSql = "SELECT * FROM BusinessPlans WHERE user_id = ?";
  pool.query(checkSql, [user_id], (checkErr, checkResult) => {
    if (checkErr) {
      return res
        .status(500)
        .json({ message: "Error al verificar en la base de datos." });
    }
    if (checkResult.length > 0) {
      const updateSql =
        "UPDATE BusinessPlans SET iniciativa = ?, mercadoMarketing = ?, gestiones = ? WHERE user_id = ?";
      const updateValues = [
        (iniciativa ?? []).join(", "),
        (mercadoMarketing ?? []).join(", "),
        (gestiones ?? []).join(", "),
        user_id,
      ];
      pool.query(updateSql, updateValues, (updateErr, updateResult) => {
        if (updateErr) {
          return res
            .status(500)
            .json({ message: "Error al actualizar en la base de datos." });
        }
        res.status(200).json({
          message: "Valores actualizados en la base de datos correctamente.",
        });
      });
    } else {
      const insertSql =
        "INSERT INTO BusinessPlans (iniciativa, mercadoMarketing, gestiones, user_id) VALUES (?, ?, ?, ?)";
      const insertValues = [
        iniciativa.join(", "),
        mercadoMarketing.join(", "),
        gestiones.join(", "),
        user_id,
      ];

      pool.query(insertSql, insertValues, (insertErr, insertResult) => {
        if (insertErr) {
          return res
            .status(500)
            .json({ message: "Error al guardar en la base de datos." });
        }
        res.status(200).json({
          message: "Valores guardados en la base de datos correctamente.",
        });
      });
    }
  });
});

app.post("/enviarCorreo", (req, res) => {
  const { senderName, senderLastName, senderEmail, senderMessage } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
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
    } else {
      console.log("Correo enviado: " + info.response);
      res.status(200).send("Correo enviado correctamente");
    }
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query =
    "SELECT id, name, email, user_type FROM Users WHERE (name = ? OR email = ?) AND password = ?";
  pool.query(query, [username, username, password], (error, results) => {
    if (error) {
      console.error("Error de la consulta:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
    if (results.length > 0) {
      res.status(200).json({ message: "Login successful", user: results[0] });
    } else {
      res.status(401).json({ message: "Invalid user or password" });
    }
  });
});

app.post("/addEvent", (req, res) => {
  const { Date, Event, Description, id_user } = req.body;

  const query =
    "INSERT INTO Events (Date, Event, Description, id_user) VALUES (?, ?, ?, ?)";
  executeQuery(
    query,
    [Date, Event, Description, id_user],
    res,
    "Evento agregado exitosamente!"
  );
});

app.get("/getEvent", (req, res) => {
  const query = "SELECT * FROM Events";
  pool.query(query, (error, results) => {
    if (error) {
      console.error("Error de la consulta:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
    res.status(200).json(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});

module.exports = app;

// ---------------------------- IMPLEMENT SUPABASE ------------------------------------------------

// import { createClient } from "@supabase/supabase-js";
// const supabase = createClient(process.env.SUPA_URL, process.env.SUPABASE_KEY);

// async function fetchUsers() {
//   try {
//     const { data, error } = await supabase.from("Users").select("*");

//     if (error) {
//       console.error("Error fetching users:", error);
//       return;
//     }

//     console.log("Raw data response:", data);

//     if (data.length === 0) {
//       console.log("No users found.");
//     } else {
//       console.log("Users:", data);
//     }
//   } catch (err) {
//     console.error("Unexpected error:", err);
//   }
// }

// fetchUsers();
