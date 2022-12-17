import './App.css';
import {Route, Routes} from "react-router-dom";

import ContactMe from '@/pages/ContactMe';
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Home from '@/pages/Home';
import Http404NotFound from '@/pages/Http404NotFound';
import Main from "@/layout/Main";
import Movies from '@/pages/Movies';


function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/movies' element={<Movies />}/>
          <Route path='/contact-me' element={<ContactMe />}/>

          <Route path='*' element={<Http404NotFound />}/>
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
