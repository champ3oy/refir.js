import { ENDPOINTS } from "../constants";
const axios = require("axios");

export default class Refir {
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
          userId,
          name,
          email,
        },
        {
          headers: {
            "x-api-key": this.apiKey,
          },
        }
      );
      if (!response.ok) {
        throw new HTTPResponseError(
          response.status,
          response.statusText,
          await response.json()
        );
      }

      return true;
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
      if (!response.ok) {
        throw new HTTPResponseError(
          response.status,
          response.statusText,
          await response.json()
        );
      }

      return response.data?.refferalCode;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
