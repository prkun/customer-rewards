import { endPoints } from '../utils/ApiEndPoints';
import { REACT_APP_BASE_API_URL } from "../config/config";


export const getPurchases = async () => {
  try {
    const response = await fetch(`${REACT_APP_BASE_API_URL}${endPoints.purchases_get}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

export const getCustomers = async () => {
  try {
    const response = await fetch(`${REACT_APP_BASE_API_URL}${endPoints.customers_get}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

