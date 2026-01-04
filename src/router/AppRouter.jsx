import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy loading core components for better performance (modern practice)
const MainLayout = lazy(() => import('../layout/MainLayout')); 
const FeedPage = lazy(() => import('../pages/FeedPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const WatchPage = lazy(() => import('../pages/WatchPage'));
const MarketplacePage = lazy(() => import('../pages/MarketplacePage'));
const GroupsPage = lazy(() => import('../pages/GroupsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const Error404 = lazy(() => import('../pages/Error404'));

// Fallback component while pages are loading
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="flex space-x-2 animate-pulse">
      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
    </div>
    <span className="ml-4 text-blue-600 font-medium">Loading Facebook...</span>
  </div>
);


/**
 * @file AppRouter.jsx
 * @description Defines the main routing structure for the Facebook clone application.
 */
function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>

          {/* Authentication Routes - typically without the main layout (Header/Sidebar) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />

          {/* Main Application Routes - wrapped by the MainLayout */}
          {/* The MainLayout component is expected to render the Navbar and Sidebars */}
          <Route element={<MainLayout />}>
            
            {/* Feed/Home Route */}
            <Route index element={<FeedPage />} /> 
            
            {/* User Profile Route (using URL parameters) */}
            <Route path="/profile/:username" element={<ProfilePage />} />
            
            {/* Facebook Watch (Video) */}
            <Route path="/watch" element={<WatchPage />} />

            {/* Marketplace */}
            <Route path="/marketplace" element={<MarketplacePage />} />

            {/* Groups */}
            <Route path="/groups" element={<GroupsPage />} />

          </Route>

          {/* 404 Not Found Route */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;