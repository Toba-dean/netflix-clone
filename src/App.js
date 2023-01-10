import { Routes, Route, Navigate } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { useAuthListener } from "./hooks/useAuthListerner";
import { Browse, HomePage, SignIn, SignUp } from "./pages";

function App() {

  const { user } = useAuthListener();

  return (
    <Routes>
      <Route path={ROUTES.HOME}>
        <Route index element={
          !user ? <HomePage /> : <Navigate to={ROUTES.BROWSE} />
        } />
        <Route path={ROUTES.SIGN_IN} element={
          !user ? <SignIn /> : <Navigate to={ROUTES.BROWSE} />
        } />
        <Route path={ROUTES.SIGN_UP} element={
          !user ? <SignUp /> : <Navigate to={ROUTES.BROWSE} />
        } />
        <Route path={ROUTES.BROWSE} element={
          user ? <Browse /> : <Navigate to={ROUTES.SIGN_IN} />
        } />
      </Route>
    </Routes>
  );
}

export default App;
