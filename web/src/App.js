import Homepage from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import UserProfile from "./pages/UserProfile";
import PageNotFound from "./pages/PageNotFound";
import EditTrials from "./pages/EditTrials";
import Layout from './components/Layout';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
        <HashRouter>
          <Routes>
              <Route path='/' element={<Layout> <Homepage/> </Layout>}/>
              <Route path='/about' element={<Layout> <About/> </Layout>}/>
              <Route path='/login' element={<Layout> <Login/> </Layout>}/>
              <Route path='/userProfile' element={<UserProfile/>} />
              <Route path='/edittrials' element={<EditTrials/>}/>
              <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        </HashRouter>
      </>
  );
}

export default App;
