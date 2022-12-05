import {Route, Routes ,Navigate} from "react-router-dom";

import {MoviesPage, NotFoundPage, MoviesWithGenrePage, MoviesBySearchPage} from "./pages";
import {MainLayoutPage} from "./layouts/MainLayoutPage";


function App() {

  return (
      <Routes>
        <Route path={'/'} element={<MainLayoutPage/>}>
            <Route index element={<Navigate to={'/movies'}/>}/>
            <Route path={'/movies'} element={<MoviesPage/>}/>
            <Route path={'/movies_with_genre=:name/:id'} element={<MoviesWithGenrePage/>}/>
            <Route path={'/movies_with_title=:title'} element={<MoviesBySearchPage/>}/>
        </Route>
          <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
  );
}

export default App;
