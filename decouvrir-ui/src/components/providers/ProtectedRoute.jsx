import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isUserActive }) => isUserActive ? children : <Navigate to="/auth/login" />;

export default ProtectedRoute;
