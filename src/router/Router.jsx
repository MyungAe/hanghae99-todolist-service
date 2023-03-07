import App from 'App';
import Detail from 'components/Detail';
import { Route, Routes } from 'react-router-dom';

function CustomRoutes() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<App />}
      />
      <Route
        path="/detail/:id"
        element={<Detail />}
      />
    </Routes>
  );
}

export default CustomRoutes;
