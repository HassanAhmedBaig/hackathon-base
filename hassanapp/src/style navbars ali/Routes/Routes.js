

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Stylednavbar from '../StyledComponents/ForNav';


function AllRoutes() {
  return (
    <>
    <Router>
      <Routes>

      <Route path='/' element={<Navbar/>} />
      <Route path="/secondnav"  element={<Stylednavbar/>}/>
   
      
      </Routes>
    </Router>
     
    </>
  );
}

export default AllRoutes;
