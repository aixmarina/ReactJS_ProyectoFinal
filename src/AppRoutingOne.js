import { Link, Route, Routes } from "react-router-dom";

import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import HomePage from "./pages/home/HomePage";

function AppRoutingOne() {
  return (
    <div>
      <aside>
        <Link to="/">|| HOME |</Link>
        <Link to="about">| ABOUT |</Link>
        <Link to="faqs">| FAQs |</Link>
        <Link to="/404">| Not Existing Route |</Link>
      </aside>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<AboutPage />} />
          {/* 404 - Page Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutingOne;
