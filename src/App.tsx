import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/post/:id"
        element={<PrivateRoute element={<PostDetailPage />} />}
      />
    </Routes>
  </Router>
);

export default App;
