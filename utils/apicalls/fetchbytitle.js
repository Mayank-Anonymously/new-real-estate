import axios from 'axios';
import { HOST } from '../static';

export const fetchpropdetails = async (setData , title , rent) => {
    try {
      const response = await axios.get(`${HOST}property/get-detail-by-id/${title}/${rent}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
    

      setData(response.data.property);
    } catch (error) {
      console.error('Error fetching county listings:', error);
    }
  };
