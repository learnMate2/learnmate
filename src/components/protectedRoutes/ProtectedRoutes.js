import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoutes = ({ children, allowRoles }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("accessToken");
    const userRole = Cookies.get("role");

    if (!token || !allowRoles.includes(userRole)) {
      if (allowRoles.includes("student")) {
        navigate("/login");
      } else if (allowRoles.includes("counsellor")) {
        navigate("/counsellor/login");
      } else if (allowRoles.includes("admin")) {
        navigate("/admin/login");
      }
    }
  }, [navigate, allowRoles]);

  // Only render children when authenticated
  const token = Cookies.get("accessToken");
  const userRole = Cookies.get("role");

  return token && allowRoles.includes(userRole) ? children : null;
};

export default ProtectedRoutes;
