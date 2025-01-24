import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import Signup from './pages/signuppage';
import Login from './pages/login';
import ProductEntryPage from './pages/ProductEntryPage';
import UpdateForm from './pages/UpdateForm';
import SinglePageProduct from './pages/singleproductpage';
import Navbar from './components/navbar/navbar';
import AddressCard from './components/address/addressCard';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-entry-page" element={<ProductEntryPage />} />
        <Route path="/update-form/:id" element={<UpdateForm />} />
        <Route path="/product-details/:id" element={<SinglePageProduct />} />
      </Routes>
      <AddressCard />
    </>
  );
}

export default App;