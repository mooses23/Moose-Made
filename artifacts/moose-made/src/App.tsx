import { Switch, Route, Router as WouterRouter } from "wouter";
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

function Router() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
        <Route path="/quote" component={Quote} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/portfolio/dhavi-spelt-bagels" component={PortfolioDhavi} />
        <Route path="/blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
