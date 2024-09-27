import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import EntityListHeader from './components/EntityListHeader';
import EntityPage from './pages/EntityPage';
import PrivatePage from './pages/PrivatePage';
import EntityDetailPage from './pages/EntityDetailPage';
import NotFound from './pages/NotFound';


const App: React.FC = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <EntityListHeader onAuth={() => setAuth(!auth)} auth={auth} />
      <Routes>
        <Route path='/' element={<EntityPage />}></Route>
        <Route path='/private'
          element={auth ? <PrivatePage /> : <Navigate to='/' />}>
        </Route>
        <Route path=':name' element={<EntityDetailPage />}></Route>
        <Route path='/404' element={<NotFound />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
