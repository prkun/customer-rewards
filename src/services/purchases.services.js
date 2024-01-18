import axios from 'axios';
import { endPoints } from '../utils/ApiEndPoints';

export const getPurchases = async () => {
    try {
      const response = await axios.get(endPoints.purchases_get);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

