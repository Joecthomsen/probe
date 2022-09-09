import Homepage from './pages/Home';
import Aboute from './pages/About';
import Login from './pages/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/probe' element={<Homepage/>}/>
          <Route path='/about' element={<Aboute/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <LandingPage />
    // </div>
  );
}

export default App;
