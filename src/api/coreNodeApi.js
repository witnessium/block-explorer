import axios from 'axios'

const API_URL = 'https://api.demo.witnessium.org'

export default {

  getStatus() {
    return axios.get(API_URL + '/status')
      .then(function (response) {
	return response.data;
      })
      .catch(function (error) {
	console.log(error);
      })
  },

  getBlocks(from, limit) {
    return axios.get(API_URL + '/block', {
      params: {
	from: from,
	limit: limit,
      }
    })
      .then(function (response) {
	return response.data;
      })
      .catch(function (error) {
	console.log(error);
      })
  },

  getBlock(blockNumber) {
    return axios.get(API_URL + '/blockinfo/' + blockNumber)
      .then(function (response) {
	return response.data;
      })
      .catch(function (error) {
	console.log(error);
      })
  },

  getTransaction(txHash) {
    return axios.get(API_URL + '/txinfo/' + txHash)
      .then(function (response) {
	return response.data;
      })
      .catch(function (error) {
	console.log(error);
      })
  },

  getAddress(address) {
    return axios.get(API_URL + '/address/' + address)
      .then(function (response) {
	return response.data;
      })
      .catch(function (error) {
	console.log(error);
      })
  },
}
