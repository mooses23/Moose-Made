import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import MainLayout from "@/components/layout/MainLayout";
import Home from "@/pages/home";
import Services from "@/pages/services";
import HowItWorks from "@/pages/how-it-works";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Faq from "@/pages/faq";
import Quote from "@/pages/quote";
import Portfolio from "@/pages/portfolio/index";
import PortfolioDhavi from "@/pages/portfolio/dhavi";
import Blog from "@/pages/blog";

const queryClient = new QueryClient();

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter basename={basePath}>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/dhavi-spelt-bagels" element={<PortfolioDhavi />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
