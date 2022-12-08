import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import CalculatorPage from './routes/calculator/CalculatorPage';
import Quote from './routes/quote/Quote';
import Navbar from './components/navbar/Navbar';

const App = () => (
  <>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </main>
  </>
);

export default App;
