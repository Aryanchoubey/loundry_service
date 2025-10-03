import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUp from "./Pages/SignUp/SignUp"
import ProfilePage from "./Pages/SignUp/ProfilePage"
import LogIn from "./Pages/LogIn/LogIn"
import Home from "./Pages/Home/Home"
import UserDashboard from "./Pages/UserDashboard/UserDashboard"
import TrackOrder from "./Pages/TrackOrder/Trackorder"
import AboutPage from "./Pages/AboutPage/AboutPage"
import OrderPage from "./Pages/OrderPage/OrderPage"
import PaymentPage from "./Pages/PaymentPage/PaymentPage"

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Define routes */}
        <Route path="signup" element={<SignUp />} />
        <Route path="profilepage" element={<ProfilePage />} />
        <Route path="login" element={<LogIn />} />
        <Route path="home" element={<Home />} />
        <Route path="userdashboard" element={<UserDashboard />} />
        <Route path="trackorder" element={<TrackOrder />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="paymentpage" element={<PaymentPage />} />
        
        
      </Routes>
    </Router>
  )
}

export default App

