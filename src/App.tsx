import { Navigate, Route, Routes } from 'react-router-dom';
import { PeoplePage } from './components/PeoplePage';
import { Navbar } from './components/Navbar';

import './App.scss';
import { URLS } from './utils/URLS';

export const App = () => {
  return (
    <div data-cy="app">
      <Navbar />

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path={URLS.baseHome}
              element={<h1 className="title">Home Page</h1>}
            />
            <Route
              path={URLS.home}
              element={<Navigate to={URLS.baseHome} replace />}
            />
            <Route
              path={URLS.notFound}
              element={<h1 className="title">Page not found</h1>}
            />
            <Route path={URLS.people}>
              <Route index element={<PeoplePage />} />
              <Route path=":slug" element={<PeoplePage />} />
            </Route>
          </Routes>

        </div>
      </div>
    </div>
  );
};
