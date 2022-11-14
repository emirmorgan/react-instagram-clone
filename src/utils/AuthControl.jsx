import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";

import Loading from "../components/Loading";

const AuthControl = () => {
  const [isMounted, setMounted] = useState(false);
  const isAuth = useSelector((state) => state.data.auth);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, [isMounted]);

  return isMounted === true ? (
    isAuth === false ? (
      <Navigate to="/login" />
    ) : (
      <Outlet />
    )
  ) : (
    <Loading />
  );
};

export default AuthControl;
