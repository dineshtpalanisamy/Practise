import { useContext } from "react";
import axios from "axios";
import AuthContext from "../AuthContext";

const useAuth = async () => {
  const { dispatch } = useContext(AuthContext);
  const login = async (userName, password) => {
    dispatch({ type: "LOGIN_REQUEST" });

    try {
      const resp = await axios.post(
        "https://dummyjson.com/auth/login",
        { userName, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = await resp.json();

      if (resp.status === 200) {
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
      } else {
        dispatch({
          type: "LOGIN_FAIL",
          payload: data.message || "Login Failed",
        });
      }
    } catch (e) {
      const errorMessage = e.resp.data.message
        ? e.resp.data.message
        : "Network error";
      dispatch({ type: "LOGIN_FAIL", payload: errorMessage });
    }
  };
  return { login };
};

export default useAuth;
