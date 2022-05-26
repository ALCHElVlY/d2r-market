// Internal imports
import { axiosPrivate } from "../../axiosPrivate.js";

// API Endpoint
const USERS_ENDPOINT = process.env.REACT_APP_USERS_ENDPOINT;

/**
 * The getOnlineUsers function sends a request to the server,
 * retrieving all of the users with a status of 'online' from the database.
 * @param {object} payload
 */
const getOnlineUsers = async (payload) => {
  const { status } = payload;
  const response = await axiosPrivate.get(`${USERS_ENDPOINT}/status/${status}`);

  if (response.status === 200) {
    return response.data;
  }
};

/**
 * The getOnlineInGameUsers function sends a request to the server,
 * retrieving all of the users with a status of 'online in game' from the database.
 * @param {object} payload
 */
const getOnlineInGameUsers = async (payload) => {
  const { status } = payload;
  const response = await axiosPrivate.get(`${USERS_ENDPOINT}/status/${status}`);

  if (response.status === 200) {
    return response.data;
  }
};

// Declare a auth service object
// to export and use
const userService = {
  getOnlineUsers,
  getOnlineInGameUsers,
};

export default userService;
