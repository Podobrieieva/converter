import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.coinlayer.com/api',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000
});

const ACCESS_KEY = 'aae9b6ca82a424afe5dceb7c14ce0751';
const SYMBOLS = 'BTC,ETH,XRP';

export default {
  getEvents(currency) {
    return apiClient.get(`/live?access_key=${ACCESS_KEY}&target=${currency}&symbols=${SYMBOLS}`);
  },
}