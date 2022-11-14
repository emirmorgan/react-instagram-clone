import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";

const AuthControl = () => {
  const user = useSelector((state) => state.data.user);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
  }, [user]);

  if (mounted.current === true) {
    return user === null ? <Navigate to="/login" /> : <Outlet />;
  } else {
    return <h1>Loading</h1>;
  }
};

export default AuthControl;
