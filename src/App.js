import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddFoodItem from './components/FoodItem/AddFoodItem';
import FoodItem from './components/FoodItem/FoodItem';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import StudentInfo from './components/StudentInfo/StudentInfo';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="" element={<Header />} /> */}
        <Route path="/foodItem" element={<FoodItem />} />
        <Route path="/addFoodItem" element={<AddFoodItem />} />
        <Route path="/studentInformation" element={<StudentInfo />} />
      </Routes>

    </>
  );
}

export default App;
