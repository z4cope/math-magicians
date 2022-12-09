import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import CalculatorPage from './routes/calculator/CalculatorPage';
import Quote from './routes/quote/Quote';
import Navbar from './components/navbar/Navbar';

const App = () => (
  <>
    <main>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>
    </main>
  </>
);

export default App;
