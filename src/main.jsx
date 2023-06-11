import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Deshboard } from "./pages/Deshboard";
import { People } from "./pages/People";
import { Planets } from "./pages/Planets";
import { Ships } from "./pages/Ships";
import { Films } from "./pages/Films"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Deshboard />} />
        <Route path='/peoole' element={<People />} />
        <Route path='/planets' element={<Planets />} />
        <Route path='/ships' element={<Ships />} />
        <Route path='/films' element={< Films />} />
      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
)
