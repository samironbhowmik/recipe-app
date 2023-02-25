import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/home';
import RecipeForm from './components/recipeForm';

function App() {
  return (
    // <div className="App">
    //   <Signin/>
    //   <Signup/>
    // </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/recipeform' element={<RecipeForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
