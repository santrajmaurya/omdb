import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ userKey, redirectPath = "/login" }) {
  if (!userKey) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
