import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Create from './components/Create'
import { useState } from 'react'
import Loader from './components/Loader'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [mode, setMode] = useState(false)
  const [loader, setLoader] = useState(false)
  return (
    <div className={mode ? "app light" : "app"}>
      <BrowserRouter>
        <ToastContainer theme='dark' autoClose={800} />
        {loader && <Loader />}
        <Navbar mode={mode} setMode={setMode} />
        <Routes>
          <Route path='/' element={<Cards setLoader={setLoader} />} />
          <Route path='/create' element={<Create />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
