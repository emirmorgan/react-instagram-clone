import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";

import Loading from "../components/Loading";

const PrivateRoutes = () => {
  const [isMounted, setMounted] = useState(false);
  const user = useSelector((state) => state.data.user);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, [isMounted]);

  return isMounted === true ? (
    !user ? (
      <Navigate to="/login" />
    ) : (
      <Outlet />
    )
  ) : (
    <Loading />
  );
};

export default PrivateRoutes;
