import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/empresa" element={<Empresa />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
