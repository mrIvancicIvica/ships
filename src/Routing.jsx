import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Maps from './Maps';
import Table from './TableData';



const Routing = () => {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path='/' element={<Maps />} />
        <Route path='table' element={<Table />} />
      </Routes>
    </Router>
  );
};

export default Routing;
