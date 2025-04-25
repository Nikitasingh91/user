import React from 'react'
import ViewUser from './component/ViewUser'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './component/Header'
import Footer from './component/Footer'
import UpdateUser from './component/updateuser'
const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewUser />} />
          <Route path="/update/:email" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App