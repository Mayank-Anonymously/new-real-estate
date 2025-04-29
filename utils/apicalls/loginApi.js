import axios from 'axios';
import { HOST } from '../static';

export const loginApi = async (email , password , router , setErros) => {
    


    console.log(email , password)

    try {

        const data = {
            email: email,
            password: password
        };

        axios.post(`${HOST}auth/login`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                router.navigate("Root");
            })
            .catch(error => {
                if (error.response) {
                    setErros(error.response.data.message)

                } else {
                    setErros(error.message)
                }
            });
    } catch (error) {
        console.error('Error fetching county listings:', error);
    }
};

