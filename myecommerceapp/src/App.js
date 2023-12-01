import Home from './components/home/home'
import Cartcontent from './components/cartcontent/cartcontent'
import DataProvider from './components/context/datacontext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './components/contacto/contacto'

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/cart" element={<Cartcontent />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
      <Contacto />
    </>
  )
}

export default App
