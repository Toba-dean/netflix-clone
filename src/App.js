import { Routes, Route } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { HomePage, SignIn, SignUp } from "./pages";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
