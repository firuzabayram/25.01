import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './layout/header';
import About from './pages/aboutas/aboutas';
import Contact from './pages/contact/contact';
import Courses from './pages/courses/courses';
import Elements from './pages/elements/elements';
import Home from './pages/home/home';
import News from './pages/news/news';
import Footer from './layout/footer';
import Our from './pages/our services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/:_id" element={<Details />} /> */}
      </Routes>
      <Our/>
      <Footer/>
    </div>
  );
}

export default App;
