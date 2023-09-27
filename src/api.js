import axios from 'axios';

const serverUrl = 'http://localhost:8080/contact';

export const handleContactMessageDelivery = async (data) => {
    return await axios.post(serverUrl, data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return { error: error.message }
        });
};