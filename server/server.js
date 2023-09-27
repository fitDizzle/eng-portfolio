const express = require('express');
const app = express();
const cors = require('cors');
const { forwardContactRequestToDomainEmail } = require('./sendGrid/send_grid');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/contact', async (req, res) => {
    const contactFormData = req.body;
    await forwardContactRequestToDomainEmail(contactFormData).then((response) => {
        res.send(response);
    }).catch((err) => res.send(err));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Server is running on port ', port);
});