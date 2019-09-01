import axios from 'axios';

const apiClient = axios.create({
  // baseURL: `https://rest.coinapi.io/v1/assets`,
  baseURL: `http://api.coinlayer.com/api`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // 'X-CoinAPI-Key': 'EB8855A5-FB0A-40B8-87D9-8A5B8C5A11D1',
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