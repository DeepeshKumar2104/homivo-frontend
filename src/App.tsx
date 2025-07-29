import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/Index';
import NotFound from './pages/NotFound';

// Auth Components (these will be implemented later when authentication is needed)
import AuthModal from './components/auth/AuthModal';

// Chat Support Component
import ChatSupport from './components/chat/ChatSupport';

const queryClient = new QueryClient();

const App = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleLoginClick = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleSignupClick = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onLoginClick={handleLoginClick} 
                  onSignupClick={handleSignupClick} 
                />
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {/* Auth Modal - Will be implemented when authentication is added */}
          {isAuthModalOpen && (
            <AuthModal 
              isOpen={isAuthModalOpen} 
              onClose={handleCloseAuthModal}
              mode={authMode}
            />
          )}
          
          {/* Chat Support - Available on all pages */}
          <ChatSupport />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;