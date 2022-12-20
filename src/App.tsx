import './App.css';
import React, {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Main from "@/layout/Main";
import Loader from "@/components/Loader";

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
          <Route path='/' element={
            <Suspense fallback={<Loader/>}>
            <Home/>
            </Suspense>
          }/>
          <Route path='/contact-me' element={
            <Suspense fallback={<Loader/>}>
              <ContactMe/>
            </Suspense>
          }/>
          <Route path='/movies' element={
            <Suspense fallback={<Loader/>}>
              <Movies/>
            </Suspense>
          }/>
          <Route path='/movies/:movieId' element={
            <Suspense fallback={<Loader/>}>
              <Movie/>
            </Suspense>
          }/>
          <Route path='*' element={
            <Suspense fallback={<Loader/>}>
              <Http404NotFound/>
            </Suspense>
          }/>
        </Routes>
      </Main>
      <Footer/>
    </>
  );
}
