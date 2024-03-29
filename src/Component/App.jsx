import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import AdminAddMaincategory from './Admin.jsx/AdminAddMaincategory'
import AdminHome from './Admin.jsx/AdminHome'
import AdminMaincategory from './Admin.jsx/AdminMaincategory'
import Login from './Login'
import Cart from './Cart'
import Checkout from './Checkout'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Shop from './Shop'



import AdminUpdateSubcategory from './Admin.jsx/AdminUpdateSubcategory'
import AdminUpdateMaincategory from './Admin.jsx/AdminUpdateMaincategory'
import AdminSubcategory from './Admin.jsx/AdminSubcategory'
import AdminAddSubcategory from './Admin.jsx/AdminAddSubcategory'
import AdminAddBrand from './Admin.jsx/AdminAddBrand'
import AdminBrand from './Admin.jsx/AdminBrand'
import AdminUpdateBrand from './Admin.jsx/AdminUpdateBrand'

import AdminAddProduct from './Admin.jsx/AdminAddProduct'
import AdminProduct from './Admin.jsx/AdminProduct'
import AdminUpdateProduct from './Admin.jsx/AdminUpdateProduct'
import SingleProductPage from './SingleProductPage'
import Signup from './Signup'
import Profile from './Profile'
import Updateprofile from './UpdateProfile'
import Confirmation from './Confirmation'
import AdminUsers from './Admin.jsx/AdminUsers'
import AdminNewslatters from './Admin.jsx/AdminNewslatter'
import AdminContactUs from './Admin.jsx/AdminContactUs'
import AdminSingleContact from './Admin.jsx/AdminSingleContact'
import AdminCheckout from './Admin.jsx/AdminCheckout'
import AdminSingleCheckout from './Admin.jsx/AdminSingleCheckout'













export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/shop/:maincat/' element={<Shop/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/single-product/:id' element={<SingleProductPage/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/update-profile' element={<Updateprofile/>} />
          <Route path='/confirmation' element={<Confirmation/>} />
          
         
          <Route path='/admin-home' element={<AdminHome/>}/>
          <Route path='/admin-maincategory' element={<AdminMaincategory/>}/>
          <Route path='/admin-add-maincategory' element={<AdminAddMaincategory/>}/>
          <Route path='/admin-update-subcategory/:id' element={<AdminUpdateSubcategory/>} />
          <Route path='/admin-update-maincategory/:id' element={<AdminUpdateMaincategory/>} />
          <Route path='/admin-subcategory' element={<AdminSubcategory/>} />
          <Route path='/admin-add-subcategory' element={<AdminAddSubcategory/>} />

          <Route path='/admin-add-brand' element={<AdminAddBrand/>} />
          <Route path='/admin-brand' element={<AdminBrand/>} />
          <Route path='/admin-update-brand/:id' element={<AdminUpdateBrand/>} />


          <Route path='/admin-add-product' element={<AdminAddProduct/>} />
          <Route path='/admin-product' element={<AdminProduct/>} />
          <Route path='/admin-update-product/:id' element={<AdminUpdateProduct/>} />
          <Route path='/admin-user' element={<AdminUsers/>} />
          <Route path='/admin-newslatter' element={<AdminNewslatters/>} />
          <Route path='/admin-contact' element={<AdminContactUs/>} />
          <Route path='/admin-single-contact/:id' element={<AdminSingleContact/>} />
          <Route path='/admin-checkout' element={<AdminCheckout/>} />
          <Route path='/admin-single-checkout/:id' element={<AdminSingleCheckout/>} />
          
          


          


         
          
          
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </>
  )
}
