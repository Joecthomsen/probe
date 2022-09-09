import Homepage from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Homepage/>
    // <BrowserRouter>
    //   <Routes>
    //       <Route path='/' element={<Homepage/>}/>
    //       <Route path='/about' element={<About/>}/>
    //       <Route path='/login' element={<Login/>}/>
    //   </Routes>
    // </BrowserRouter>
    // <div className="App">
    //   <LandingPage />
    // </div>
  );
}

export default App;
