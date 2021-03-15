import axios from "axios";

export const GET_USERS = "GET_USERS";

export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/users`)
      .then((res) => {
        console.log(res);
        dispatch({ type: GET_USERS, payload: res.data });
      })
      .catch((err) => console.log('dispatch users' + err));
  };
};
