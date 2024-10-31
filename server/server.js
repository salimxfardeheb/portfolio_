const express = require("express");
const cors = require("cors");

const { readDataFile } = require("./functions");

const body_parser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/")));
app.use(body_parser.urlencoded({ extended: true }));

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "salimfardeheb442@gmail.com",
      pass: "jgmn lndo jfgm alyo",
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
      res.send(JSON.parse(content))
    })
    .catch((error) => {
      res.status(500).json("erreur : ", error)
      console.error(error);
    });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
