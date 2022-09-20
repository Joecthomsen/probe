import Homepage from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import UserProfile from "./pages/UserProfile";
import CreateUser from "./pages/CreateUser";
import ViewTrials from "./pages/ViewTrials";

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import EditTrials from "./pages/EditTrials";
import Layout from './components/Layout';
import PageNotFound from "./pages/PageNotFound";

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
              <Route path='/createuser' element={<CreateUser/>}/>
              <Route path='/trials' element={<ViewTrials/>}/>
              <Route path='*' element={<PageNotFound/>}/>

          </Routes>
        </HashRouter>
      </>
  );
}

export default App;
