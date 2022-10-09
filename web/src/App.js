import Homepage from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import UserProfile from "./pages/UserProfile";
import CreateUser from "./pages/CreateUser";
import ViewTrials from "./pages/ViewTrials";
import AdminLogin from "./pages/AdminLogin";
import Page from "./pages/AdminPage";
import AdmLayout from './components/AdminPages/AdminLayout';

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
              <Route path='/userProfile' element={<Layout> <UserProfile/> </Layout>} />
              <Route path='/edittrials' element={<Layout><EditTrials/></Layout>}/>
              <Route path='/createuser' element={ <Layout> <CreateUser/></Layout> }/>
              <Route path='/trials' element={<Layout> <ViewTrials/> </Layout>}/>
              <Route path='/admin' element={<AdminLogin/>}/>
              <Route path='/admin-page' element={<AdmLayout><Page/> </AdmLayout>}/>
              <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        </HashRouter>
      </>
  );
}

export default App;
