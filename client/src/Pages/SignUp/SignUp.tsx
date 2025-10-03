import { Mail, User, Lock, Phone } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { useNavigate } from "react-router-dom"

export default function SignUp() {
   const navigate = useNavigate()
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* ✅ Header */}
      <header className="w-full flex items-center justify-between bg-[#021427] shadow px-2 sm:px-4 py-2 sm:py-3">
        {/* Logo */}
        <div className="flex items-center gap-1 sm:gap-2">
          <img src="/shirt.svg" alt="logo" className="h-6 w-6 sm:h-6 sm:w-6" />
          <h2 className="text-white font-bold text-lg sm:text-sm md:text-lg">
            Sparkleclean
          </h2>
        </div>

        {/* Navbar */}
        <nav className="flex gap-2 sm:gap-4 md:gap-8">
          <Button className="bg-transparent text-white shadow-none hover:bg-transparent hover:text-white px-1 sm:px-2">
            <img src="/shirt.svg" alt="" className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="font-bold text-xs sm:text-sm">Home</span>
          </Button>
          <Button 
          onClick={() => navigate("/login")}
          className="bg-transparent text-white shadow-none hover:bg-transparent hover:text-white px-1 sm:px-2">
            <img src="/loginimg.svg" alt="" className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="font-bold text-xs sm:text-sm">Login</span>
          </Button>
          <Button className="bg-teal-600 text-white px-2 sm:px-4 text-xs sm:text-sm">
            Signup
          </Button>
        </nav>
      </header>

      {/* ✅ Main Section */}
      <main className="flex flex-1 justify-center sm:items-center  p-2 sm:p-4">
        <div className="flex bg-teal-100 w-full items-center justify-center max-w-[1050px] sm:h-[650px] h-[650px] rounded-2xl">
          <div className="bg-teal-600 max-w-[1000px] sm:h-auto rounded-2xl shadow-xl flex flex-col w-full overflow-hidden">
            {/* Inside Logo */}
            <div className="flex px-4 py-5 pt-3 sm:px-6 sm:pt-4">
              <h1 className="font-bold text-lg sm:text-lg flex items-center gap-1 sm:gap-2 text-white">
                <img src="/shirt.svg" alt="" className="h-6 w-6 sm:h-6 sm:w-6" />
                SparkleClean
              </h1>
            </div>

            {/* ✅ Form + Illustration */}
            <div className="flex flex-col md:flex-row">
              {/* Left - Form */}
              <div className="flex-1 flex items-center justify-center p-3 sm:p-6">
                <Card className="w-full max-w-md">
                  <CardHeader className="flex flex-col">
                    <CardTitle className="text-lg sm:text-2xl font-bold">
                      Create an Account
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Join SparkleClean and start home laundry service
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    {/* Fullname */}
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="fullname" className="font-bold text-sm">
                        Full Name
                      </Label>
                      <div className="flex items-center  border-2 border-teal-400 rounded-md px-2 sm:px-3">
                        <User className="h-4 w-4 text-gray-400 mr-2" />
                        <Input
                          id="fullname"
                          placeholder="Your fullname"
                          className="border-0 focus-visible:ring-0 text-sm"
                        />
                      </div>
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="email" className="font-bold text-sm">
                        Email
                      </Label>
                      <div className="flex items-center border-2 border-teal-400 rounded-md px-2 sm:px-3">
                        <Mail className="h-4 w-4 text-gray-400 mr-2" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="border-0 focus-visible:ring-0 text-sm"
                        />
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="phone" className="font-bold text-sm">
                        Phone
                      </Label>
                      <div className="flex items-center border-2 border-teal-400 rounded-md px-2 sm:px-3">
                        <Phone className="h-4 w-4 text-gray-400 mr-2" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Phone number"
                          className="border-0 focus-visible:ring-0 text-sm"
                        />
                      </div>
                    </div>
                    {/* Password */}
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="password" className="font-bold text-sm">
                        Password
                      </Label>
                      <div className="flex items-center border-2 border-teal-400 rounded-md px-2 sm:px-3">
                        <Lock className="h-4 w-4 text-gray-400 mr-2" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Password"
                          className="border-0 focus-visible:ring-0 text-sm"
                        />
                      </div>
                    </div>
                    {/* Submit */}
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-sm sm:text-base">
                      Sign Up
                    </Button>
                    <p className="text-xs text-center sm:text-sm">
                      Already have an account?{" "}
                      <a href="#" className="text-blue-500 font-medium">
                        Login
                      </a>
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Right - Illustration */}
              <div className="hidden md:flex flex-1 justify-center items-center bg-teal-600 p-6">
                <img
                  src="/signup.svg"
                  alt="Signup Illustration"
                  className="max-w-[220px] sm:max-w-sm w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

