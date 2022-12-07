import {Route, Routes, Navigate} from "react-router-dom";

import {MoviesPage, NotFoundPage, MoviesWithGenrePage, MoviesBySearchPage, DetailsPage} from "./pages";
import {MainLayoutPage} from "./layouts/MainLayoutPage";


function App() {


    return (
        <Routes>
            <Route path={'/'} element={<MainLayoutPage/>}>
                <Route index element={<Navigate to={'/all_movies/page:page'}/>}/>
                <Route path={'/all_movies/page=:page'} element={<MoviesPage/>}/>
                <Route path={'/movies_with_genre=:name/:id/page=:page'} element={<MoviesWithGenrePage/>}/>
                <Route path={'/movies_with_title=:title'} element={<MoviesBySearchPage/>}/>
                    <Route path={'/all_movies/page=:page/detailed_info_with_id=:id'} element={<DetailsPage/>}/>
                    <Route path={'/movies_with_genre=:name/:id/detailed_info_with_id=:id'} element={<DetailsPage/>}/>
                    <Route path={'/movies_with_title=:title/detailed_info_with_id=:id'} element={<DetailsPage/>}/>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
