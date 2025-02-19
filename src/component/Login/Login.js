import { useState, useContext } from "react";
import Auth from "../Auth/Auth";
import AuthContext from "../../AuthContext";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const { state } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(userName, password);
  };

  return (
    <>
      <h2>Login</h2>
      {/* <div
        style={{
          marginBottom: "20px",
          padding: "20px 20px",
          border: "2px solid black",
        }}
      >
        <div>
          <label style={{ marginRight: "20px" }}>UserName</label>
          <input
            style={{ marginBottom: "20px" }}
            type="text"
            placeholder="UserName"
            required
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div>
          <label style={{ marginRight: "20px" }}>Password</label>
          <input
            style={{ marginBottom: "20px" }}
            type="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          style={{}}
          onClick={() => {
            SetSubmitted(true);
          }}
        >
          {" "}
          Submit{" "}
        </button>
      </div>
      {isSubmitted && <Auth name={userName} pwd={password} />} */}

      <div
        style={{
          marginRight: "20px ",
          padding: "20px",
          border: "2px solid black",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label> userName </label>
            <input
              style={{ marginBottom: "20px" }}
              type="text"
              required
              placeholder="username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div>
            <label> Password </label>
            <input
              style={{ marginBottom: "20px" }}
              type="password"
              placeholder="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {state.loading && <p>Loading...</p>}
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      </div>
    </>
  );
};

export default Login;
