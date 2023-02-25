import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signin from './components/Signin';
import Signup from './components/Signup';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
