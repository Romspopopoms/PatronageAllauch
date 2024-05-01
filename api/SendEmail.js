import nodemailer from 'nodemailer';

// Nommer la fonction pour l'exportation par défaut
async function sendEmail(req, res) {
  if (req.method === 'POST') {
    const { name, firstName, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
        user: "masaintebible@gmail.com",
        pass: "Peperomain13*"
            }
          });
          

    const mailOptions = {
      from:'no-reply@yourdomain.com',
      to: process.env.EMAIL_USER,
      subject: 'Nouveau message du formulaire de contact',
      text: `Nom: ${name}\nPrénom: ${firstName}\nEmail: ${email}\nTéléphone: ${phone}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).send({ error: 'Method not allowed' });
  }
}

// Exporter la fonction nommée
export default sendEmail;
