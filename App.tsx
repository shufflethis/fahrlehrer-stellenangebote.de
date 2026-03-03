import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import JobSeekers from './pages/JobSeekers';
import Employers from './pages/Employers';
import CareerInfo from './pages/CareerInfo';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AutorSeite from './pages/AutorSeite';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobSeekers />} />
          <Route path="/employer" element={<Employers />} />
          <Route path="/career" element={<CareerInfo />} />
          <Route path="/impressum" element={<Impressum />} />
                  {/* // HR-UPDATER: v1.0 */}
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/autor/thomas-sander" element={<AutorSeite />} />
          </Routes>
      </Layout>
    </Router>
  );
};

export default App;