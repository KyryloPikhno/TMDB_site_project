import {Route, Routes} from "react-router-dom";

import {MainLayoutPage} from "./layouts/MainLayoutPage";
import {MoviesPage, NotFoundPage} from "./pages";


function App() {

  return (
      <Routes>
        <Route path={'/'} element={<MainLayoutPage/>}>
            <Route index element={<MoviesPage/>}/>
            <Route path={'/movies'} element={<MoviesPage/>}/>
        </Route>
          <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
  );
}

export default App;
