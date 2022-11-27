import {Route, Routes ,Navigate} from "react-router-dom";

import {MainLayoutPage} from "./layouts/MainLayoutPage";
import {MoviesPage, NotFoundPage} from "./pages";


function App() {

  return (
      <Routes>
        <Route path={'/'} element={<MainLayoutPage/>}>
            <Route index element={<Navigate to={'/movies'}/>}/>
            <Route path={'/movies'} element={<MoviesPage/>}/>
        </Route>
          <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
  );
}

export default App;
