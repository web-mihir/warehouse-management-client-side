import './App.css';
import React from 'react';
import NavigationBar from './Components/Shared/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Blogs from './Components/Pages/Blogs/Blogs';
import NotFound from './Components/Pages/NotFound/NotFound';
import Footer from './Components/Shared/Footer';
import Login from './Components/Pages/Auth/Login/Login';
import Register from './Components/Pages/Auth/Register/Register';
import AuthReq from './Components/Pages/Auth/AuthReq/AuthReq';
import MyItem from './Components/Pages/MyItem/MyItem';
import AddItem from './Components/Pages/AddItem/AddItem';
import ManageInventory from './Components/Pages/ManageInventory/ManageInventory';
import ProductDetail from './Components/Pages/ProductDetails/ProductDetail';

function App() {
  return (
    <React.Fragment>

      <NavigationBar></NavigationBar>

      <main>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/inventory' element={<AuthReq><ManageInventory></ManageInventory></AuthReq>}></Route>
          <Route path='/inventory/:productId'
            element={<AuthReq>
              <ProductDetail></ProductDetail>
            </AuthReq>}>
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>

          <Route path='/my-item'
            element={<AuthReq>
              <MyItem></MyItem>
            </AuthReq>}>
          </Route>

          <Route path='/add-item'
            element={<AuthReq>
              <AddItem></AddItem>
            </AuthReq>}>
          </Route>

          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </main>

      <Footer></Footer>

    </React.Fragment>
  );
}

export default App;
