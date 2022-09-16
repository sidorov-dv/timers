import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const shouldRedirect = true;
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if (shouldRedirect) {
        navigate("/");
      }
    }, 2000);
    // eslint-disable-next-line
  }, []);
  return (
    <h1 className="display-1 text-center mt-5 text-danger fw-bolder">
      Page not found - code 404
    </h1>
  );
};

export default NotFound;
