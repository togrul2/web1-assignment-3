import './App.css';
import {lazy} from "react";
import {Route, Routes} from "react-router-dom";

import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Main from "@/layout/Main";

// pages
const Home = lazy(() => import("@/pages/Home"));
const Movies = lazy(() => import("@/pages/Movies"));
const Movie = lazy(() => import("@/pages/Movie"));
const ContactMe = lazy(() => import("@/pages/ContactMe"));
const Http404NotFound = lazy(() => import("@/pages/Http404NotFound"));


export default function App() {
  return (
    <>
      <Header/>
      <Main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact-me' element={<ContactMe/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:movieId' element={<Movie/>}/>

          <Route path='*' element={<Http404NotFound/>}/>
        </Routes>
      </Main>
      <Footer/>
    </>
  );
}
