import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CarInsurance from "./pages/CarInsurance";
import BusinessInsurance from "./pages/BusinessInsurance";
import RentalInsurance from "./pages/RentalInsurance";
import HomeInsurance from "./pages/HomeInsurance";
import ConnectWithUs from "./pages/ConnectWithUs";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Quote from "@/components/Quote";
import Carquote from "@/components/Carquote";
import Rentalquote from "@/components/Rentalquote";
import Businessquote from "@/components/Businessquote";
import Homequote from "@/components/Homequote";
import FloatingIcons from "@/components/FloatingIcons";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <FloatingIcons />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/car-insurance" element={<CarInsurance />} />
          <Route path="/business-insurance" element={<BusinessInsurance />} />
          <Route path="/rental-insurance" element={<RentalInsurance />} />
          <Route path="/home-insurance" element={<HomeInsurance />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/connect" element={<ConnectWithUs />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/Carquote" element={<Carquote />} />
          <Route path="/Rentalquote" element={<Rentalquote />} />
          <Route path="/Businessquote" element={<Businessquote />} />
          <Route path="/Homequote" element={<Homequote />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
