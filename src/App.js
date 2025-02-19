import "./styles.css";
import Login from "../src/component/Login/Login";
import withErrorBoundary from "../src/hoc/withErrorBoundary";
import FallBackUI from "../src/component/FallBack/FallBackUI";
import { AuthProvider } from "./AuthContext";

const LoginWithErrorBoundary = withErrorBoundary(Login, FallBackUI);

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <LoginWithErrorBoundary />
      </AuthProvider>
    </div>
  );
}
