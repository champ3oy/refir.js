const axios = require("axios");
const { ENDPOINTS } = require("../constants");

class Refir {
  constructor() {
    this.apiKey = null;
  }

  configure(options) {
    this.apiKey = options.apiKey;
  }

  async addUser({ userId, name, email }) {
    if (!this.apiKey) {
      throw new Error("Please configure the apiKey first.");
    }

    try {
      const response = await axios.post(
        ENDPOINTS.WEBHOOK,
        {
          leadId: userId,
          name,
          email,
        },
        {
          headers: {
            "x-api-key": this.apiKey,
          },
        }
      );

      if (response?.data?.status) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async getUserById(id) {
    if (!this.apiKey) {
      throw new Error("Please configure the apiKey first.");
    }
    try {
      const response = await axios.get(`${ENDPOINTS.GET_LEAD}${id}`, {
        headers: {
          "x-api-key": this.apiKey,
        },
      });

      if (response?.data?.status) {
        return response.data?.refferalCode;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

module.exports = Refir;
