import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center">
      <motion.div
        className="w-full max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="google-surface relative overflow-hidden rounded-[2rem] p-8 text-center">
          <div className="google-grid-bg absolute inset-0 opacity-55" />
          <div className="relative">
            <div className="mb-6 flex justify-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]" />
            </div>

            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-slate-200 bg-white text-4xl font-bold text-[#1a73e8] shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
              404
            </div>

            <h1 className="mb-3 font-display text-3xl text-slate-900 dark:text-white">Page Not Found</h1>
            <p className="mb-8 text-slate-600 dark:text-zinc-300">The page you are looking for does not exist or has been moved.</p>

            <Link to="/">
              <motion.button
                className="inline-flex items-center rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] px-6 py-3 font-medium text-white shadow-md"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
