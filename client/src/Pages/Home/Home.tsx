import { Anvil, BedDouble, Mail, Shirt, WashingMachine } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: <Shirt className="w-8 h-8 text-teal-600" />,
    title: "Wash & Fold",
    description:
      "Basic wash and fold service with gentle detergent, proper drying, and neatly folded clothes ready to wear or store.",
    item: "1 Item",
    price: "₹15",
  },
  {
    icon: <WashingMachine className="w-8 h-8 text-teal-600" />,
    title: "Dry Cleaning",
    description:
      "Professional dry cleaning service with fabric-friendly solutions, gentle care for delicate clothes,  fresh finish.",
    item: "1 Item",
    price: "₹20",
  },
  {
    icon: <Anvil className="w-8 h-8 text-teal-600" />,
    title: "Ironing",
    description:
      "Professional ironing service ensuring wrinkle-free, and well-pressed clothes with fabric-safe techniques.",
    item: "1 Item",
    price: "₹10",
  },
  {
    icon: <BedDouble className="w-8 h-8 text-teal-600" />,
    title: "Bedding",
    description:
      "Fresh and hygienic cleaning for comforters,  and bed sheets, ensuring softness and long-lasting freshness.",
    item: "1 Item",
    price: "₹25",
  },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full flex bg-gray-200 flex-col">
      {/* ✅ Header */}
      <div className="flex justify-center px-2 sm:px-10">
        <header className="w-full flex items-center justify-between bg-[#021427] shadow px-2 sm:px-4 py-2 sm:py-3">
          {/* Logo */}
          <div className="flex items-center gap-1 sm:gap-2">
            <img
              src="/shirt.svg"
              alt="logo"
              className="h-6 w-6 sm:h-6 sm:w-6"
            />
            <h2 className="text-white font-bold text-lg sm:text-sm md:text-lg">
              SparkleClean
            </h2>
          </div>
          {/* Navbar */}
          <nav className="flex gap-1 sm:gap-4 md:gap-8">
            <Button className="bg-teal-600 text-black shadow-none hover:bg-transparent hover:text-white px-1 sm:px-2">
              <img
                src="/homelogo.svg"
                alt=""
                className="h-3 w-3 sm:h-5 sm:w-5"
              />
              <span className="font-bold text-xs sm:text-sm hidden sm:inline">Home</span>
            </Button>
            <Button
              onClick={() => navigate("/about")}
              className="bg-transparent text-white shadow-none hover:bg-transparent hover:text-white px-1 sm:px-2"
            >
              <img
                src="/aboutlogo.svg"
                alt=""
                className="h-3 w-3 sm:h-5 sm:w-5"
              />
              <span className="font-bold text-xs sm:text-sm hidden sm:inline">About</span>
            </Button>
            <Button className="bg-transparent text-white px-2 sm:px-4 text-xs sm:text-sm">
              <img
                src="/placeorderlogo.svg"
                alt=""
                className="h-3 w-3 sm:h-5 sm:w-5"
              />
              <span className="font-bold text-xs sm:text-sm hidden sm:inline">PlaceOrder</span>
            </Button>
            <Button
              onClick={() => navigate("/trackorder")}
              className="bg-transparent text-white px-2 sm:px-4 text-xs sm:text-sm"
            >
              <img
                src="/trackorderlogo.svg"
                alt=""
                className="h-3 w-3 sm:h-5 sm:w-5"
              />
              <span className="font-bold text-xs sm:text-sm hidden sm:inline">TrackOrder</span>
            </Button>
            <Button className="bg-transparent text-white px-2 sm:px-4 text-xs sm:text-sm">
              <img
                src="/userlogo.svg"
                alt=""
                className="h-3 w-3 sm:h-6 sm:w-6"
              />
            </Button>
          </nav>
        </header>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 sm:gap-10 py-6 sm:py-8 bg-white mx-2 sm:mx-4">
        <div className="w-full flex flex-col items-center font-bold justify-center h-fit gap-3 sm:gap-5 pt-3">
          <h1 className="text-3xl sm:text-8xl text-[#021427] text-center">Welcome to</h1>
          <h1 className="text-3xl sm:text-8xl text-[#021427] text-center">SparkleClean Laundry</h1>
        </div>
        <div className="w-full flex flex-col justify-center h-fit font-bold">
          <h1 className="flex justify-center text-lg sm:text-2xl text-gray-500 text-center">
            Laundry Made Simple. Fresh Clothes, Zero Hassle.
          </h1>
          <h1 className="flex justify-center text-lg sm:text-2xl text-gray-500 text-center">
            Fast, fresh, and affordable laundry service at your doorstep.
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center h-fit font-bold">
          <h1 className="flex justify-center text-lg sm:text-2xl text-gray-500 text-center">
            SparkleClean takes the stress out of laundry.
          </h1>
          <h1 className="flex justify-center text-lg sm:text-2xl text-gray-500 text-center">
            Enjoy doorstep pickup, eco-friendly cleaning, and on-time delivery – all at a price you’ll love.
          </h1>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-x-40 py-5">
          <Button className="bg-teal-600 w-full sm:w-[250px] h-[50px] gap-6 flex justify-center items-center">
            <p className="text-lg sm:text-2xl font-semibold">PlaceOrder</p>
            <img src="/nextlogo.svg" alt="" className="h-3 w-3 bg-teal-700 sm:h-5 sm:w-5" />
          </Button>
          <Button
            onClick={() => navigate("/trackorder")}
            className="w-full sm:w-[250px] h-[50px] bg-transparent border-2 gap-6 flex justify-center items-center border-teal-600 px-2 sm:px-4 text-xs sm:text-lg"
          >
            <span className="font-bold text-teal-700 text-xs sm:text-2xl">TrackOrder</span>
            <img src="/trackorderlogo.svg" alt="" className="h-3 w-3 bg-teal-700 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
      <section className="py-8 sm:py-10 px-2 sm:px-4 flex flex-col">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#021427] mb-6 sm:mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-12 sm:gap-y-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col justify-evenly w-full sm:w-[400px] h-[250px] text-center shadow-md rounded-xl mx-auto"
            >
              <CardHeader className="flex flex-row justify-between">
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="text-lg sm:text-2xl font-bold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h1 className="text-gray-600 text-base sm:text-lg font-bold mb-3">
                    {service.description}
                  </h1>
                </div>
              </CardContent>
              <CardContent>
                <div className="flex justify-between text-base sm:text-lg font-bold text-teal-700">
                  <span>{service.item}</span>
                  <span>{service.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="flex flex-col sm:flex-row w-full pb-5 gap-6 sm:gap-0">
        <div className="w-full sm:w-[50%] h-fit flex justify-center mb-4 sm:mb-0">
          <img className="w-full max-w-xs sm:max-w-[500px] h-auto" src="/servicelogo.svg" alt="" />
        </div>
        <Card className="flex w-full sm:w-[45%]">
          <CardHeader className="flex flex-col justify-center items-center">
            <CardTitle className="text-lg sm:text-2xl font-bold flex">
              Quick Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-between">
            <div className="flex flex-col justify-between gap-4 sm:gap-6 px-2 sm:px-5">
              <div className="flex flex-col gap-1">
                <h1 className="text-base sm:text-xl font-bold pl-1">Name</h1>
                <div className="flex flex-col border-2 border-teal-500 rounded-md">
                  <Input
                    id="fullname"
                    placeholder="Your name"
                    className="border-0 h-[45px] focus-visible:ring-0 placeholder:text-base sm:placeholder:text-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-base sm:text-xl font-bold pl-1">Phone</h1>
                <Input
                  id="phone"
                  placeholder="Your Phone Number"
                  className="border-1 h-[45px] focus-visible:ring-0 placeholder:text-base sm:placeholder:text-lg"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-base sm:text-xl font-bold pl-1">Message</h1>
                <div className="flex h-[100px] sm:h-[150px] border-2 border-teal-400 rounded-md px-2 sm:px-3">
                  <Mail className="h-4 w-4 text-gray-400 mr-2 mt-3" />
                  <Input
                    id="message"
                    placeholder="How can we help You?"
                    className="border-0 focus-visible:ring-0 placeholder:text-base sm:placeholder:text-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <Button className="h-[45px] bg-teal-600 text-base sm:text-xl font-bold">
                  Send Message
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <footer className="bg-[#1a1f2b] text-white w-full py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          {/* Logo and description */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
              <span className="text-2xl">🧺</span> SparkleClean
            </h2>
            <p className="mt-2 text-gray-200 text-base sm:text-lg font-semibold">
              Professional laundry service with pickup and delivery. Quality care
              for your clothes.
            </p>
          </div>
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="text-gray-100 space-y-2 text-sm sm:text-md font-semibold">
              <li>Wash & Fold</li>
              <li>Dry Cleaning</li>
              <li>Ironing</li>
              <li>Bedding</li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <ul className="text-gray-100 space-y-2 text-sm sm:text-md font-semibold">
              <li>+91 9304790916</li>
              <li>pushpamsingh204@gmail.com</li>
              <li>123 Service St, Ranchi</li>
              <li>Jharkhand</li>
            </ul>
          </div>
          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-2">Hours</h3>
            <ul className="text-gray-100 space-y-2 text-sm sm:text-md font-semibold">
              <li>Mon-Fri: 7AM-8PM</li>
              <li>Sat: 8AM-6PM</li>
              <li>Sun: 9AM-5PM</li>
            </ul>
          </div>
        </div>
        {/* Bottom line */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-base sm:text-xl">
          © 2025 <span className="font-bold">SparkleClean.</span> All rights reserved.
        </div>
      </footer>
    </div>
  );
}