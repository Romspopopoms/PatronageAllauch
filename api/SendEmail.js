import nodemailer from 'nodemailer';

// Créer un transporteur Nodemailer qui utilise l'authentification OAuth2
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'masaintebible.fr@gmail.com', // L'adresse email que vous utilisez pour envoyer des e-mails
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
  }
});

// Fonction pour envoyer des e-mails
async function sendEmail(formData) {
  const { name, firstName, email, phone, message } = formData;
  const mailOptions = {
    from: 'masaintebible.fr@gmail.com', // L'adresse Gmail utilisée pour OAuth2
    to: 'masaintebible.fr@gmail.com', // Votre propre adresse où vous souhaitez recevoir les infos du formulaire
    subject: 'Nouveau message du formulaire de contact',
    text: `Vous avez reçu un message de ${name} ${firstName} (${email}):
           Téléphone : ${phone}
           Message : ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return 'Email sent successfully';
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Handler pour les requêtes HTTP à cet endpoint
async function emailHandler(req, res) {
  if (req.method === 'POST') {
    try {
      const result = await sendEmail(req.body);
      res.status(200).send({ message: result });
    } catch (error) {
      res.status(500).send({ error: 'Failed to send email', details: error.message });
    }
  } else {
    res.status(405).send({ error: 'Method not allowed' });
  }
}

export default emailHandler;
