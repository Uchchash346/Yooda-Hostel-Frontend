import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddFoodItem from './components/FoodItem/AddFoodItem';
import FoodItem from './components/FoodItem/FoodItem';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/foodItem" element={<FoodItem />} />
      <Route path="/addFoodItem" element={<AddFoodItem />} />
    </Routes>
      
      {/* <Login /> */}
    </>
  );
}

export default App;
