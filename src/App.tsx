
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import PropertyListingPage from "./pages/PropertyListingPage";
import PropertyViewPage from "./pages/PropertyViewPage";
import NotFound from "./pages/NotFound";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Page transition wrapper component
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// App component
const App = () => {
  // Create a new QueryClient instance inside the component
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <Index />
              </PageTransition>
            } />
            <Route path="/buy" element={
              <PageTransition>
                <PropertyListingPage />
              </PageTransition>
            } />
            <Route path="/rent" element={
              <PageTransition>
                <PropertyListingPage />
              </PageTransition>
            } />
            <Route path="/lease" element={
              <PageTransition>
                <PropertyListingPage />
              </PageTransition>
            } />
            <Route path="/land" element={
              <PageTransition>
                <PropertyListingPage />
              </PageTransition>
            } />
            <Route path="/property/:propertyId" element={
              <PageTransition>
                <PropertyViewPage />
              </PageTransition>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
