import Home from './components/home/home'
import Cartcontent from './components/cartcontent/cartcontent'
import DataProvider from './components/context/datacontext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './components/contacto/contacto'
import Granja from './components/categories/granja'
import Almacen from './components/categories/almacen'
import Carniceria from './components/categories/carniceria'
import Verduleria from './components/categories/verduleria'
import Notfound from './components/notfound/notfound'

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/cart" element={<Cartcontent />} />
            <Route exact path="/granja" element={<Granja />} />
            <Route exact path="/carniceria" element={<Carniceria />} />
            <Route exact path="/verduleria" element={<Verduleria />} />
            <Route exact path="/almacen" element={<Almacen />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
      <Contacto />
    </>
  )
}

export default App
