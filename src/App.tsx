import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './common/Navbar';
import Hero from './custom/Hero';
import SuccessPage from './custom/success';
import About from './custom/about';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/success" element={<SuccessPage />} />
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Hero />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <NavBar />
                <About />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
