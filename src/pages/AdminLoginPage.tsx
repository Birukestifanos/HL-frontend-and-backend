import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, LogIn } from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';

export function AdminLoginPage() {
  const { login } = useAdminAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }
    const success = login(username.trim(), password);
    if (!success) {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#0f0f0f] flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-xl border border-[#B91C1C]/10 dark:border-[#B91C1C]/20 p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B91C1C]/10 rounded-full mb-4">
              <Lock className="h-8 w-8 text-[#B91C1C]" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-[#111111] dark:text-white">
              Admin Login
            </h1>
            <p className="text-[#1a1a1a]/70 dark:text-white/70 mt-2 text-sm">
              Enter your credentials to access the admin panel.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 text-sm">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] text-[#1a1a1a] dark:text-white focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 outline-none"
                placeholder="Admin username"
                autoComplete="username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] text-[#1a1a1a] dark:text-white focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 outline-none"
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#B91C1C] text-white font-bold py-3 rounded-lg hover:bg-[#991B1B] transition-colors flex items-center justify-center gap-2"
            >
              <LogIn className="h-5 w-5" />
              Sign In
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
