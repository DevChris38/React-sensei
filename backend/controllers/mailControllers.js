import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

const sendContactMail = (req, res) => {
  const { name, surname, phone, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: "christopher.arthaud@gmail.com",
      pass: "PDwgEVqFn5cZ4M2z",
    },
  });

  const mailOptions = {
    from: email, // this is the address from which the email will be sent
    to: "christopher.arthaud@gmail.com", // this is the address to which the email will be sent
    subject: "New message from contact form",
    text: `${message} \n\n Phone: ${phone} \n\n Name: ${name} \n\n Surname: ${surname} \n\n Email: ${email}`,
    html: `<p>${message}</p> <p>Phone: ${phone}</p> <p>Name: ${name}</p> <p>Surname: ${surname}</p> <p>Email: ${email}</p>`,
  };

  transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.warn(info);
      res.status(200).send("Message sent");
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("Something went wrong");
    });
};

export default sendContactMail;
