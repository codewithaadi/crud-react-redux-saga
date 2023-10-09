import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';
import UserInfo from './pages/UserInfo';
import Header from './components/Header';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
    <Header />
    <Box style={{ marginTop: 67}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addUser' element={<AddEditUser />}/>
        <Route path='/editUser/:id' element={<AddEditUser />}/>
        <Route path='/userInfo/:id' element={<UserInfo/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Box>
  </BrowserRouter>
  );
}

export default App;
