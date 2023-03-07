import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import { Home, About, Products, Cart, SingleProduct, Checkout } from "./pages";


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/products' element= {<Products/>}/>
        <Route path='/products/:id' element= {<SingleProduct/>}/>
        <Route path='/cart' element= {<Cart/>}/>
        <Route path='/checkout' element = {<Checkout/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
