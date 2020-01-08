import axios from 'axios'

const API_URL = 'http://localhost:8080'

export default {

  API_URL: API_URL,

  postTicket(ticket) {
    return axios.post(API_URL + '/ticket', ticket, {
      headers: {
	'Content-Type': 'multipart/form-data'
      }
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
  },

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
    return axios.get(API_URL + '/transaction/' + txHash)
      .then(function (response) {
	return response.data.value.ticketData;
      })
      .catch(function (error) {
	console.log(error);
      })
  },

  getAddress(address) {
    return axios.get(API_URL + '/ticket?licenseNo=' + address)
      .then(function (response) {
	return response.data;
      })
      .catch(function (error) {
	console.log(error);
      })
  },
}
