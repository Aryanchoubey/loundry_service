"use client"

import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Truck, Clock, ShieldCheck, Menu } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AboutPage() {
  const naviagte = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 sm:px-10 px-3">
      {/* Navbar */}
      <header className="w- bg-[#021427] text-white shadow-md px- ">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center px- py-4">
         <div className="flex  flex-row items-center gap-3 justify-center ">
          <div><img className="w-6" src="shirt.svg" alt="" />
          </div>
           <div>
            <h1 className="text-xl font-bold  "> SparkleClean</h1>
           </div>
         </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            <Button variant="ghost" className="text-white font-bold hover:text-teal-400">
              Home
            </Button>
            <Button variant="ghost" className="text-teal-400 font-bold">
              About
            </Button>
            <Button variant="ghost" className="text-white font-bold hover:text-teal-400">
              Place Order
            </Button>
            <Button
            onClick={()=>naviagte("/trackorder")}
             variant="ghost" className="text-white font-bold hover:text-teal-400">
              Track Order
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden bg-[#021427]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <nav className="md:hidden bg-[#021427] flex flex-col sm:px-6 px-3 py-4 space-y-2">
            <Button variant="ghost" className="text-white font-bold justify-start">
              Home
            </Button>
            <Button variant="ghost" className="text-white justify-start">
              About
            </Button>
            <Button variant="ghost" className="text-white justify-start">
              Place Order
            </Button>
            <Button variant="ghost" className="text-white justify-start">
              Track Order
            </Button>
          </nav>
        )}
      </header>

      {/* About Us Section */}
      <section className="max-w-8xl mx-auto px-4 py-5">
        <div className="bg-white shadow-md rounded-xl p-6 md:p-10 text-center">
          <h2 className="text-5xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 font-bold mb- text-2xl">
            We make laundry convenient, reliable, and affordable 
          </p>
          <p className="text-gray-600 font-bold mb-8 text-2xl">
            with our professional services
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-sm">
              <CardContent className="p-6 text-center">
                <Truck className="mx-auto w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="font-bold text-lg">Free Pickup & Delivery</h3>
                <p className="text-gray-600 text-md font-semibold">
                  Convenient pickup and delivery service right to your door at no extra charge
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6 text-center">
                <Clock className="mx-auto w-10 h-10 text-teal-500 mb-4" />
                <h3 className="font-bold text-lg">24x7 Hour Service</h3>
                <p className="text-gray-600 text-md font-semibold">
                  Fast turn around time with same-day pickup and next-day delivery available
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6 text-center">
                <ShieldCheck className="mx-auto w-10 h-10 text-black mb-4" />
                <h3 className="font-bold text-lg">100% Satisfaction</h3>
                <p className="text-gray-600 text-md font-semibold">
                  Quality guarantee with eco-friendly cleaning product and professional care
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-8xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-2">How it works</h2>
          <p className="text-gray-600 font-semibold text-lg mb-10">Simple steps to get your laundry done professionally</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Schedule Pickup", desc: "Choose your preferred pickup time and we'll come to you" },
              { step: "2", title: "We Clean", desc: "Professional cleaning with eco-friendly products and care" },
              { step: "3", title: "Quality Check", desc: "Every item is inspected to ensure perfect results" },
              { step: "4", title: "Delivery", desc: "Fresh, clean clothes delivery back to your door" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-gray-600 text-sm font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1b2a] text-white py-10 px-5 mt-10">
        <div className="max-w-6xl mx-auto px- grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-row gap-3  items-center mb-5 ">
              <img src="shirt.svg" alt="" />
            <h3 className="font-bold text-lg mb-"> SparkleClean</h3>
            </div>
            <p className="text-sm font-semibold text-gray-300">
              Professional laundry service with pickup and delivery. Quality care for your clothes.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3">Services</h3>
            <ul className="space-y-1 text-sm font-bold gap-3 flex flex-col  text-gray-300">
              <li>Wash & Fold</li>
              <li>Dry Cleaning</li>
              <li>Ironing</li>
              <li>Bedding</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Contact</h3>
            <ul className="space-y-1 text-sm gap-3 flex flex-col font-bold text-gray-300">
              <li>📞 +91 9304789016</li>
              <li>✉️ pushpansingh204@gmail.com</li>
              <li>📍 123 Service St, Ranchi, Jharkhand</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Hours</h3>
            <ul className="space-y-1 text-sm gap-3 flex flex-col font-bold text-gray-300">
              <li>Mon-Fri: 7AM–8PM</li>
              <li>Sat: 8AM–6PM</li>
              <li>Sun: 9AM–5PM</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-6">
          © 2025 <span className="font-semibold">SparkleClean</span>. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
