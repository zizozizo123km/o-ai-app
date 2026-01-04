import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './pages/Login';
import { useAuth } from './context/AuthContext'; // Assume you have an AuthContext

// Mock Components for a realistic structure
const Profile = () => (
  <div className="flex justify-center p-8 text-xl">
    <p>صفحة الملف الشخصي (Profile)</p>
  </div>
);
const Friends = () => (
  <div className="flex justify-center p-8 text-xl">
    <p>صفحة الأصدقاء (Friends)</p>
  </div>
);
const Watch = () => (
  <div className="flex justify-center p-8 text-xl">
    <p>صفحة المشاهدة (Watch)</p>
  </div>
);

const HomeLayout = () => (
  <>
    <Header />
    <main className="flex bg-gray-100 dark:bg-gray-900 pt-14 min-h-screen">
      <Sidebar />
      <div className="flex-grow p-4 md:p-6 lg:ml-[240px] lg:mr-[300px] xl:mx-auto xl:max-w-7xl">
        <Feed />
      </div>
      <Widgets />
    </main>
  </>
);

function App() {
  // Mock authentication logic (replace with actual useAuth implementation)
  const { user, loading } = {
    user: { name: 'محمد', avatar: '/path/to/avatar.jpg' }, // Simulate logged-in user
    loading: false,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <svg
          className="animate-spin h-8 w-8 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span className="ml-3 text-gray-700 dark:text-gray-300">جاري التحميل...</span>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {!user && <Route path="/login" element={<Login />} />}
        
        {/* Protected Routes (Main App) */}
        {user ? (
          <>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/watch" element={<Watch />} />
            {/* Redirect to home if user is logged in and tries to access /login */}
            <Route path="/login" element={<HomeLayout />} /> 
          </>
        ) : (
          /* Redirect unauthenticated users to login */
          <Route path="*" element={<Login />} /> 
        )}

      </Routes>
    </Router>
  );
}

export default App;