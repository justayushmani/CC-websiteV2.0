import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import TeamPage from './pages/TeamPage';

// Import individual event page components
import CodeClash2024Page from './pages/events/CodeClash2024Page';
import RustEdPage from './pages/events/RustEdPage';
import OnceUponACrimePage from './pages/events/OnceUponACrimePage';
import TError3Page from './pages/events/TError3Page';
import ByondCodePage from './pages/events/ByondCodePage';
import HeadNodePage from './pages/events/HeadNodePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/team" element={<TeamPage />} />

        {/* Individual event pages */}
        <Route path="/events/codeclash-2024" element={<CodeClash2024Page />} />
        <Route path="/events/rust-ed" element={<RustEdPage />} />
        <Route path="/events/once-upon-a-crime" element={<OnceUponACrimePage />} />
        <Route path="/events/t-error-3" element={<TError3Page />} />
        <Route path="/events/byond-code" element={<ByondCodePage />} />
        <Route path="/events/head-node" element={<HeadNodePage />} />
      </Routes>
    </Router>
  );
}

export default App;