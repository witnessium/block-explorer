import axios from 'axios'

const API_URL = 'http://localhost:8080'

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
}
