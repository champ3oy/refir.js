const axios = require("axios");
const { ENDPOINTS } = require("../constants");

class Refir {
  constructor() {
    this.apiKey = null;
  }

  configure(options) {
    this.apiKey = options.apiKey;
  }

  async addUser({ userId, name, email, referralCode }) {
    if (!this.apiKey) {
      throw new Error("Please configure the apiKey first.");
    }

    if (!(userId && name && email)) {
      throw new Error("Please pass in a correct user object");
    }

    try {
      const response = await axios.post(
        ENDPOINTS.WEBHOOK,
        {
          leadId: userId,
          name,
          email,
          referralCode,
        },
        {
          headers: {
            "x-api-key": this.apiKey,
          },
        }
      );

      if (response?.data?.status) {
        return {
          status: true,
          data: {
            ...response?.data,
          },
        };
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
    if (!id) {
      throw new Error("Please pass the userId");
    }
    try {
      const response = await axios.get(`${ENDPOINTS.GET_LEAD}${id}`, {
        headers: {
          "x-api-key": this.apiKey,
        },
      });

      if (response?.data?.status) {
        return {
          status: true,
          data: {
            referralCode: response.data?.lead?.referralCode,
            referralLink: response.data?.lead?.referralLink,
          },
        };
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
