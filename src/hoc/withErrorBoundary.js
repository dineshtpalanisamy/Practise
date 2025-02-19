import { useState, useEffect } from "react";

const withErrorBoundary = (wrappedComponent, FallbackComponent) => {
  return (props) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      const handleError = (error, errorInfo) => {
        console.error("Error caught in HOC:", error, errorInfo);
        setHasError(true);
      };
      window.addEventListener("error", handleError);
      return () => {
        window.removeEventListener("error", handleError);
      };
    }, []);

    if (hasError) {
      return <FallbackComponent />;
    }

    return <wrappedComponent {...props} />;
  };
};

export default withErrorBoundary;
