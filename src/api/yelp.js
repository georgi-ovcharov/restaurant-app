import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 
      'Bearer LSL8P1Ml2MEMpsnOlrhaKs3i3UiDAVLgEDp18WWOo_XANetcRs4_U3_i3Vs5hnuJZFZrPSs5W_ZHWnMIJ1oVjSJ72FPwEN7uY5wQzP6V9322Vd3JzeHKsi_5cDpAY3Yx'
  }
})