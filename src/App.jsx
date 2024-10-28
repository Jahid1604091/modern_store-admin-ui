import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
import AppLoader from './components/common/AppLoader';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <AppLoader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<DashboardPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
