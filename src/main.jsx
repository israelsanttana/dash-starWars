import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Deshboard } from "./pages/Deshboard";
import { People } from "./pages/People";
import { Planets } from "./pages/Planets";
import { Starships } from "./pages/Starships";
import { Films } from "./pages/Films"
import { Layout } from './components/layout/Layout';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <Layout>
        <Routes>
          <Route path='/' element={<Deshboard />} />
          <Route path='/peoole' element={<People />} />
          <Route path='/planets' element={<Planets />} />
          <Route path='/starships' element={<Starships />} />
          <Route path='/films' element={< Films />} />
        </Routes>
      </Layout>

    </BrowserRouter>

  </React.StrictMode>,
)
