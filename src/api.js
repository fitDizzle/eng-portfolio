import axios from 'axios';

const serverUrl = 'https://eng-portfolio-sendgrid-server-7a7dcebc5029.herokuapp.com/contact';

export const handleContactMessageDelivery = async (data) => {
    return await axios.post(serverUrl, data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return { error: error.message }
        });
};