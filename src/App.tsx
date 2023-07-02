import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import PrivateRoute from './utils/routes/PrivateRoute';
import Home from './pages/Home';
import { selectTheme } from './redux/features/themeSlice';
import { useSelector } from 'react-redux'

function App() {

  const darkThemePreference = useSelector(selectTheme)

  return (
    <div className={darkThemePreference ? 'dark' : ''}>
      <Routes>
        {/* public routes */}
        <Route path="/login" element={<Login />} />

        {/* private routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<Home />} path="/home" />
        </Route>

        <Route path="*" element={<Navigate replace to="/home" />} />

      </Routes>
    </div>
  );
}

export default App;
