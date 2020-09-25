import axios from 'axios';
class apiService {

    listarInvoices = () => {
        return new Promise((resolve, reject) => {
            axios.get('/api/invoices', {})
                .then(response => {
                    if ( response.data.result )
                    {
                        resolve(response.data.result);
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                })
                 .catch((error) => {
                    console.log(error)
                });
        });
    };

    uodateInvoice = id => {
        return new Promise((resolve, reject) => {
            axios.post('/api/invoices', {id:id})
                .then(response => {
                    if ( response.data.result )
                    {
                        resolve(response.data.result);
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                })
                 .catch((error) => {
                    console.log(error)
                });
        });
    };

}

const instance = new apiService();

export default instance;
