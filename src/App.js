import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import SearchCar from './pages/SearchCar';
import DetailCar from './pages/DetailCar';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carimobil" element={<SearchCar />} />
        <Route path="/detailmobil/:id" element={<DetailCar />} />
      </Routes>
    </>
  );
}

export default App;