import nodemailer from 'nodemailer';

// Configuration de transporter pour l'authentification OAuth2 avec Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'masaintebible.fr@gmail.com',
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
  }
});

// Fonction pour envoyer un email de confirmation à l'expéditeur du formulaire
async function sendConfirmationEmail(formData) {
  const { name, firstName, email } = formData;
  const mailOptions = {
    from: 'masaintebible.fr@gmail.com',
    to: email,
    subject: "Votre Message à bien été reçu",
    text: `Bonjour ${name} ${firstName}, nous vous informons que nous avons bien reçu votre message.`
  };

  try {
    await transporter.sendMail(mailOptions);
    return 'Confirmation email sent successfully';
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
}

// Fonction pour envoyer un email avec les informations du formulaire au propriétaire
async function sendEmail(formData) {
  const { name, firstName, email, phone, message } = formData;
  const mailOptions = {
    from: 'masaintebible.fr@gmail.com',
    to: 'masaintebible.fr@gmail.com',
    subject: 'Nouveau message du formulaire de contact',
    text: `
      Vous avez reçu un message de 
      ${name} ${firstName} (${email}):
      Téléphone : ${phone}
      Message : ${message}
    `
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
      const confirmationResult = await sendConfirmationEmail(req.body);
      res.status(200).send({ message: result, confirmationMessage: confirmationResult });
    } catch (error) {
      res.status(500).send({ error: 'Failed to send email', details: error.message });
    }
  } else {
    res.status(405).send({ error: 'Method not allowed' });
  }
}

export default emailHandler;
