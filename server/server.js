const express = require('express')
const cors = require('cors')

const body_parser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/')));
app.use(body_parser.urlencoded({ extended: true }));

app.post('/send', (req, res) => {
    const  { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "salimfardeheb442@gmail.com",
            pass: "jgmn lndo jfgm alyo"
        }
    })
    const mailOptions = {
        from : email,
        to: "salimfardeheb442@gmail.com",
        subject: `Portfolio: Message de ${name}`,
        html: `<h1>Message de :${name}</h1>
        <p>email: ${email}</p>
        <br/>
        <p>message: ${message}</p>`
    }
    transporter.sendMail(mailOptions , (error, info) => {
        if(error) res.send(error);
        else res.send("success")
    })
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});