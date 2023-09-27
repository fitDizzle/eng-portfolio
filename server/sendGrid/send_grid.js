// echo "export SENDGRID_API_KEY=''" > sendgrid.env
// echo "sendgrid.env" >> .gitignore
// source ./sendgrid.env

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

module.exports = {
    forwardContactRequestToDomainEmail: ({ name, phone, email, subject, message }) => {
        const msg = {
            to: 'mark@idevforweb.com', // recipient
            from: 'mark@idevforweb.com', // verified sender
            name: name,
            phone: phone,
            fromUsersEmail: email,
            subject: subject,
            text: message,
        };

        return sgMail
            .send(msg)
            .then(() => {
                return 'success';
            })
            .catch((error) => {
                return error;
            });
    }
}