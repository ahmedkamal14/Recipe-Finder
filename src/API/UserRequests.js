import axios from "axios";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(
      "https://dummyjson.com/user/login",
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentUser = async (token, logout) => {
  try {
    const response = await axios.get("https://dummyjson.com/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    logout();
    console.error(error);
  }
};
