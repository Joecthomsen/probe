import Homepage from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import UserProfile from "./pages/UserProfile";
import PageNotFound from './pages/PageNotFound';

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/userProfile' element={<UserProfile/>} />
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </HashRouter>
    // <div className="App">
    //   <LandingPage />
    // </div>
  );
}

export default App;
