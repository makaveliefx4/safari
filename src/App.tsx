import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Destinations from "./pages/Destinations";
import Beaches from "./pages/Beaches";
import BigFive from "./pages/BigFive";
import GreatMigration from "./pages/GreatMigration"
import Friendly from "./pages/Friendly";
import Hiking from "./pages/Hiking"
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/beaches" element={<Beaches/> } />
          <Route path="/big-five" element={<BigFive/>} />
          <Route path="/great-migration" element={<GreatMigration/>} />
          <Route path="/hiking" element={<Hiking/>} />
          <Route path="/friendly" element={<Friendly/>} />
          <Route path="/accommodation" element={<Destinations />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
