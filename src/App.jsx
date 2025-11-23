import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </>
  );
}

export default App;