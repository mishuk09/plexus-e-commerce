import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../Firebase/Firebase.init';
import { Navigate, useLocation } from 'react-router';

const auth = getAuth(app);

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {

        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="mt-3 text-lg font-semibold text-gray-600">Loading categories...</p>
            </div>
        );
    }

    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;
