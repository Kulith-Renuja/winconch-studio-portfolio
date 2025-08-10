import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { authAPI } from '../services/api';

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await authAPI.register({
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
      localStorage.setItem('adminToken', response.data.token);
      localStorage.setItem('adminData', JSON.stringify(response.data.admin));
      navigate('/admin/dashboard');
    } catch (error: any) {
      setError(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Admin Registration</h2>
          <p className="text-gray-400 mt-2">Create your admin account</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-gray-300 block mb-2 font-medium">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Choose a username"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-gray-300 block mb-2 font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-gray-300 block mb-2 font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Create a password"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div>
            <label className="text-gray-300 block mb-2 font-medium">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/admin/login')}
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;