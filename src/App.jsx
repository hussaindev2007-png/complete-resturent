import { Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/not";
import Collection from "./pages/Colection";
import ProductDetail from "./pages/ProductD";
import AddCard from "./component/Add";
import CheackOut from "./component/CheackOut";
import Dashboard from "./pages/Dashboard";
import Profile from "./component/profile";
import Orders from "./component/Orders";
import Menu from "./component/Menu";
import Reservations from "./component/Reservations";
import Customers from "./component/Customers";
import Setting from "./component/Settings";
import Notification from "./Tab/Notifications";
import Login from './authentication/login';
import Signup from './authentication/SignUp';


const App = () => {
 
  

  return (
    <AuthProvider>
      

       <Header />

      <Routes>
    
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

   
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute><Collection /></ProtectedRoute>} />
       
        <Route path="/products/:id" element={<ProtectedRoute><ProductDetail /> </ProtectedRoute>} />
        <Route path="/add" element={<ProtectedRoute><AddCard /></ProtectedRoute>} />
        <Route path="/cheackout" element={<ProtectedRoute><CheackOut /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
        <Route path="/reservations" element={<ProtectedRoute><Reservations /></ProtectedRoute>} />
        <Route path="/customers" element={<ProtectedRoute><Customers /></ProtectedRoute>} />
        <Route path="/setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
        <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>} />

     
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
      <Footer />
     
    </AuthProvider>
  );
};

export default App;
