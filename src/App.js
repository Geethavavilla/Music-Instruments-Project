

import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import Homes from "./Components/Pages/Homes";
import Products from "./Components/Pages/Products";
import Addproducts from "./Components/Pages/Addproducts";
import Menu from './Components/Menu/Menu';
import NotFound from "./Components/Pages/NotFound"


const App = () =>
  {
    
  return (
    <>

      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Menu></Menu>} />
            <Route path="/home" element={<Homes></Homes>} />
            <Route path="/products" element={<Products></Products>} />
            <Route path="/addproduct" element={<Addproducts></Addproducts>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route> 
          </Routes>
       
      </BrowserRouter>
    </>
  );
};
export default App;
