
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import GlassCard from "../components/GlassCard";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center">
      <motion.div 
        className="text-center max-w-lg w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GlassCard>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-portfolioLightBlue">
                <span className="text-4xl font-bold text-portfolioBlue">404</span>
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Link to="/">
            <motion.button
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </motion.button>
          </Link>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default NotFound;
