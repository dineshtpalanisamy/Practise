import { useContext } from "react";
import AuthContext from "../../AuthContext";

const Auth = (props) => {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <div>
      <div>
        {state.isAuthenticated ? (
          <>
            <h2>
              {state.user.userName}
              <button
                onClick={() => {
                  dispatch({ type: "LOGOUT" });
                }}
              >
                Logout
              </button>
            </h2>
          </>
        ) : (
          <h2> Please login</h2>
        )}
      </div>
    </div>
  );
};

export default Auth;
