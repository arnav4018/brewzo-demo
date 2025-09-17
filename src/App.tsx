import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/Home';
import StoryPage from '@/pages/Story';
import ContactPage from '@/pages/Contact';
import { AnimatePresence } from 'framer-motion';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
