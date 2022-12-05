import { Route, Routes } from 'react-router-dom';
import LoggedInRoutes from "./routes/LoggedInRoutes";
import Profile from './pages/Profile/index';
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import Home from './pages/Home/index';
import Login from './pages/login/index';

function App() {

  return (
    <div>
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home />} exact />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login/>} exact />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
