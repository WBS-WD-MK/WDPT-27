import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_TRAVEL_JOURNAL_API_URL || '',
  withCredentials: true,
});

export default axiosInstance;
