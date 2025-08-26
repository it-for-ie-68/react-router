import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import About from "./About.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout.tsx";
import Dashboard from "./Dashboard.tsx";
import DashboardSettings from "./DashboardSettings.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
