import {Route, Routes, Navigate} from "react-router-dom";

import {DetailsPage, MoviesPage, NotFoundPage, TvShowsPage} from "./pages";
import {MainLayoutPage} from "./layouts/MainLayoutPage";


function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayoutPage/>}>
                <Route index element={<Navigate to={'/all_movies'}/>}/>
                <Route path={'/all_movies'} element={<MoviesPage/>}/>
                <Route path={'/all_movies/detailed_info_with_id=:id'} element={<DetailsPage/>}/>
                <Route path={'/all_TV-shows'} element={<TvShowsPage/>}/>
                <Route path={'/all_TV-shows/detailed_info_with_id=:id'} element={<DetailsPage/>}/>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
