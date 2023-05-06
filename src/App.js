import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { About, Blog, ContactUs, Home, Pricing, Tokens, NoPage } from "./pages";
import { Navbar, Footer } from "./components";
import "./App.scss";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
