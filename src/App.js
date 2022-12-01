import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/index';
import Profile from './pages/Profile/index';
import Home from './pages/Home/index';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>} exact/>
        <Route path='/profile' element={<Profile/>} exact/>
        <Route path='/' element={<Home/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
