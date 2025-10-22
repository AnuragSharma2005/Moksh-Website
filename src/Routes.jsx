import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import ServicesPage from './pages/services';
import Contact from './pages/contact';
import TeamPage from './pages/team';
import DemoRequest from './pages/demo-request';
import AboutPage from './pages/about';
import Homepage from './pages/homepage';
import PersonalProjectsPage from './pages/personal-projects';
import TeamMemberProfilePage from './pages/team-member-profile';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/demo-request" element={<DemoRequest />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/personal-projects" element={<PersonalProjectsPage />} />
        <Route path="/team-member-profile" element={<TeamMemberProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
