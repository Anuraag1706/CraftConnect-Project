import Home from "../../taskd3/src/Home"
import Dashboard from "../../taskd3/src/Dashboard";
import Item from "../../taskd3/src/Item";
import ListProduct from "../../taskd3/src/ListProduct";
import Update from "../../taskd3/src/Update";
import Adminlogin from "../../taskd3/src/Adminlogin";
import Adminsign from "../../taskd3/src/Adminsign";

import './App.css';
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
function App(){
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Adminlogin />} />
      <Route path="/adminsign" element={<Adminsign />} />
      {/* <Route path="/adminlogin" element={<Adminlogin />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/item" element={<Item />} />
      <Route path="/listproduct" element={<ListProduct />} />
      <Route path="/update/:pid" element={<Update />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;