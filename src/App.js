import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Header from "./component/header/Header";
import Homepage from "./component/home/Homepage";
import Footer from "./component/footer/Footer";
import Singlepage from "./component/watch/Singlepage";
import Series from "./component/series/Series";
import Movies from "./component/movies/Movies";
import Pages from "./component/pages/Pages";
import Price from "./component/Pricing/Price";
import Contact from "./component/Contact/Contact";
//{}[]
function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/singlepage/:id" element={<Singlepage/>}/>
          <Route path="/series" element={<Series/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/pages" element={<Pages/>} />
          <Route path="/pricing" element={<Price/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
    
    </BrowserRouter>
  );
}

export default App;
