// import LoginPage from "./components/auth/login";
// import SignUpPage from "./components/auth/signup";
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import Signup from './pages/signuppage';
import Login from './pages/login';
import ProductEntryPage from './pages/ProductEntryPage';
import UpdateForm from './pages/UpdateForm';
import Navbar from './components/navBar/NavBar';


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-entry-page" element={<ProductEntryPage />} />
        <Route path="/update-form/:id" element={<UpdateForm/>}/>
      </Routes>
    </>
  );
}

export default App;