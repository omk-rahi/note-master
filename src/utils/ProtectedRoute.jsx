import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import { getCurrentUser } from "../services/authServices";
import { useEffect } from "react";
import FullPageSpinner from "../components/FullPageSpinner";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { data: user, isLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });

  const isAuthenticated = user?.role === "authenticated";

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <FullPageSpinner />;

  if (isAuthenticated) return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
