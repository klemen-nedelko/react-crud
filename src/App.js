import './App.css';
import Layout from './component/Shared/Layout';
import AllProducts from './pages/AllProducts';
import AddProduct from './pages/AddProduct';
import { Route, Routes } from "react-router-dom";
import UpdateProduct from './pages/UpdateProduct';

function App() {
  return (
   <Layout>
    <Routes>
      <Route path='/' element={<AllProducts/>}></Route>
      <Route path='/add-product' element={<AddProduct />}></Route>
      <Route path='/edit-product/:id' element={<UpdateProduct />}></Route>
    </Routes>
    </Layout>
  );
}

export default App;
