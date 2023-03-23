
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home'))
const Movies = lazy(() => import('../pages/Movies'))
const DetalisMovie = lazy(()=> import('../pages/DetalisMovie'))
const Cast = lazy(() => import('../components/Cast'))
const Reviews = lazy(() => import('../components/Reviews'))


export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<DetalisMovie />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        </Route>
      </Routes>
  );
};
