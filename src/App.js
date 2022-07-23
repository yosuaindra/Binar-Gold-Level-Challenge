import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import SearchCar from './pages/SearchCar';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carimobil" element={<SearchCar />} />
      </Routes>
    </>
  );
}

export default App;