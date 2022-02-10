import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddFoodItem from './components/FoodItem/AddFoodItem';
import FoodItem from './components/FoodItem/FoodItem';
import UpdateFoodItem from './components/FoodItem/UpdateFoodItem';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import DisplayStudentInfo from './components/StudentInfo/DisplayStudentInfo';
import StudentInfo from './components/StudentInfo/StudentInfo';
import UpdateStudentInfo from './components/StudentInfo/UpdateStudentInfo';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/foodItem" element={<FoodItem />} />
        <Route path="/addFoodItem" element={<AddFoodItem />} />
        <Route path="/studentInfo" element={<DisplayStudentInfo />} />
        <Route path="/addStudentInformation" element={<StudentInfo />} />
        <Route path="/foods/update/:id" element={<UpdateFoodItem />} />
        <Route path="/students/update/:id" element={<UpdateStudentInfo />} />
      </Routes>

    </>
  );
}

export default App;
