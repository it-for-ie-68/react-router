import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import About from "./About.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
