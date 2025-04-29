import axios from 'axios';
import { HOST } from '../static';

export const fetchallcounty = async (setData) => {
    try {
      const response = await axios.get(`${HOST}listing/listings`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
  
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching county listings:', error);
    }
  };
