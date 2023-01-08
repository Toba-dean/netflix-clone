import { Routes, Route } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { HomePage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
