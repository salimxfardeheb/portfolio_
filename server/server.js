const express = require("express");
const cors = require("cors");

const { readDataFile } = require("./functions");

const body_parser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "./.env" });

// const allowedOrigins = [process.env.CLIENT_URL];

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/")));
app.use(body_parser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: "salimfardeheb442@gmail.com",
    subject: `Portfolio: Message de ${name}`,
    html: `<h3>Message de :${name}</h3>
            <p>email: ${email}</p>
            <br/>
            <p>message: ${message}</p>`,
  };

  if (name && email && message) {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error occurred:", error);
        res
          .status(500)
          .json("Une erreur s'est produite lors de l'envoi du message.");
      } else {
        res.status(200).json("Message envoyé avec succès.");
      }
    });
  } else {
    res
      .status(400)
      .json("Veuillez fournir un nom, un email et un message valides.");
  }
});

app.get("/portfolio", (req, res) => {
  readDataFile()
    .then((content) => {
      res.send(JSON.parse(content));
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
      console.error("server error :" + error);
    });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
