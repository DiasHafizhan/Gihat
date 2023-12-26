import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/Fragment/Navbar"
import Home from "./Component/Pages/Home"
import Footer from "./Component/Fragment/Footer"
import AboutPages from "./Component/Pages/AboutPages"
import CalculatePages from "./Component/Pages/CalculatePages"
import HasilPages from "./Component/Pages/HasilPages"
import RekomendasiPages from "./Component/Pages/RekomendasiPages"
import ItemPages from "./Component/Pages/ItemPages"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={AboutPages} />
        <Route path="/calculate" Component={CalculatePages} />
        <Route path="/hasil" Component={HasilPages} />
        <Route path="/rekomendasi" Component={RekomendasiPages} />
        <Route path="/item" Component={ItemPages} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
