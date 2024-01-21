import axios from 'axios';
import { endPoints } from '../utils/ApiEndPoints';

export const getPurchases = async () => {
  try {
    const response = await axios.get(endPoints.purchases_get);
    return response.data;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

export const getCustomers = async () => {
  try {
    const response = await axios.get(endPoints.customers_get);
    return response.data;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

