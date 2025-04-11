import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../Firebase/Firebase.init';

const auth = getAuth(app);

export default function Signin() {
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const getEmail = (e) => setEmail(e.target.value);
    const getPassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setEmail('');
                setPassword('');
                setIsLogin(true);
                setError(null);
            })
            .catch(err => setError(err.message));
    };

    if (isLogin) {
        return <Navigate to="/adminpage" />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-purple-600 text-white rounded-full p-3 mb-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2m0 0V9a4 4 0 118 0v2m0 0c0 1.104-.896 2-2 2s-2-.896-2-2" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Sign In</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            onBlur={getEmail}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            onBlur={getPassword}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                   

                    <button
                        type="submit"
                        className="w-full py-2 mt-10 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300"
                    >
                        Sign In
                    </button>

                    {error && (
                        <div className="mt-4 text-sm text-red-600 bg-red-100 p-2 rounded-md">
                            {error}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
