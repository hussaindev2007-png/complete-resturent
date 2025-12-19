import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/home');
    } catch (err) {
      setError('Failed to log in: ' + err.message);
    }

    setLoading(false);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">

       
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800 tracking-wide">
          Login
        </h2>

        
        {error && (
          <div className="bg-red-200 text-red-800 px-4 py-3 rounded-lg mb-5 font-medium shadow">
            {error}
          </div>
        )}

 
        <form onSubmit={handleSubmit} className="space-y-6">

        
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              placeholder="Enter your password"
            />
          </div>

          
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2.5 rounded-lg font-semibold text-white shadow transition-all duration-200 ${
              loading
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.98]'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>

     
        <div className="mt-6 pt-4 relative">
         
          <hr className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 border-0 rounded mb-4" />

          <center>
            <strong className="text-gray-700 leading-relaxed text-sm">
              <p>Email for user: <span className="text-purple-600 font-medium">hussaindev@gmail.com</span></p>
              <p>Password: <span className="text-purple-600 font-medium">hussainali</span></p>
            </strong>
          </center>
        </div>

      </div>
    </div>
  );
}