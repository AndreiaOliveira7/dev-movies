import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Movies from "../containers/Movies";
import Series from "../containers/Series";
import DefaultLayout from "../layout/DefaultLayout";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/filmes" element={<Movies />} />
        <Route exact path="/series" element={<Series />} />
      </Route>
    </Routes>
  );
}
export default Router;
