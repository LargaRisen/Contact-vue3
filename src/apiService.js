import axios from "axios";

// Set base URL if needed
axios.defaults.baseURL = "https://randomuser.me/api";

export const apiService = {
  async getData(endpoint) {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data from ${endpoint}: ${error}`);
    }
  },

  async postData(endpoint, data) {
    try {
      const response = await axios.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(`Error posting data to ${endpoint}: ${error}`);
    }
  },

  async putData(endpoint, data) {
    try {
      const response = await axios.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(`Error putting data to ${endpoint}: ${error}`);
    }
  },

  async deleteData(endpoint) {
    try {
      const response = await axios.delete(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`Error deleting data from ${endpoint}: ${error}`);
    }
  },
};
