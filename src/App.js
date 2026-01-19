import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import Header from './shared/header/header';
import Footer from './shared/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Layout />
        <Routes>
          <Route></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
