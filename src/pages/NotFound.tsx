import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <img 
            src="/images/HomivoLogo.png" 
            alt="Homivo" 
            className="h-14 w-auto mx-auto mb-6" 
          />
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild size="lg" className="px-8">
            <Link to="/">
              <i className="fas fa-home mr-2"></i> Return to Homepage
            </Link>
          </Button>
          
          <div className="text-gray-500 dark:text-gray-500 mt-8">
            Need help? <a href="#contact" className="text-primary hover:underline">Contact our support team</a>
          </div>
        </div>
      </div>
    </div>
  );
}