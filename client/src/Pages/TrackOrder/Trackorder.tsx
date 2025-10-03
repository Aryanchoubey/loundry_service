import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import { CheckCircle, Search } from "lucide-react";
import { Checkbox,CheckboxIndicator } from "@radix-ui/react-checkbox";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [showOrder, setShowOrder] = useState(false);

  const handleTrack = () => {
    if (orderId.trim() !== "") setShowOrder(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col  bg-gray-50 p-6">
      {/* Search Icon */}
      <div className=" w-full h-[20vh] flex justify-center items-end pb-4  ">
         <img className="w-26 h-24" src="searchlogo.svg" alt="" />
        {/* <div className="w-20 h-20 flex items-center justify-center rounded-full bg-teal-500 mb-6">
        
        </div> */}
      </div>

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
        Track Your Order
      </h1>
      <p className="text-gray-500 mb-6 text-center">
        Enter your order ID to check the status
      </p>

      {/* Input */}
     <div className="flex justify-center items-center gap- bg-white p-4 rounded-xl mb-3">
  <fieldset className="border-2 border-teal-500 rounded-l-xl sm:w-[50vw] w-[80vw] flex items-center px-5">
    <legend className="text-teal-500 w-fit px-3 text-xl font-semibold">
      Order ID
    </legend>

    <Input
      type="text"
      placeholder="e.g. ORD-001 or 9876543210"
      value={orderId}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setOrderId(e.target.value)
      }
      className="flex-1 border-none focus-visible:ring-0 text-gray-700"
    />

   
  </fieldset>
   <Button
      onClick={handleTrack}
      className="bg-teal-600 hover:bg-teal-600 text-white flex h-[53px] mt-3.5 items-center gap-2 rounded-br-lg rounded-tr-lg rounded-l-none "
    >
      <Search className="w-4 h-4" />
      Track Order
    </Button>
</div>



      {/* Order Card */}
      {showOrder && (
        <Card className="w-full max-w-3xl mt- shadow-lg">
          <CardHeader className="bg-teal-500 text-white rounded-t-xl  shadow-md p-4 flex justify-between">
            <CardTitle>Order ORD-001</CardTitle>
            <span className="text-sm bg-white text-teal-600 px-2 py-1 rounded-md font-medium">
              Picked
            </span>
          </CardHeader>
          <CardContent className="p-6 grid grid-cols-1 md:p-0 md:grid-cols-2 gap-6">
            {/* Customer Info */}
            <div>
              <h2 className="text-xl font-bold mb-2">
                Customer Information
              </h2>
            </div>
            <div>
              
              <p>
                <span className="font-bold">Name:</span> Pushpam Singh
              </p>
              <p>
                <span className="font-bold">Phone:</span> +91 9304790616
              </p>
              <p>
                <span className="font-bold">Address:</span> 123 Indrapuri,
                Ranchi, Jharkhand 834005, Lakshmi Apartment
              </p>

              {/* Order Progress */}
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Order Progress</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-teal-600 font-medium">
                    <CheckCircle className="w-5 h-5" /> Picked Up
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="w-5 h-5" /> Washed
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="w-5 h-5" /> Packed
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="w-5 h-5" /> Delivered
                  </li>
                </ul>
              </div>
            </div>

            {/* Order Details */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Order Details</h2>
              <p>
                <span className="font-bold">Items:</span> Shirt-2, Pant-2
              </p>
              <p>
                <span className="font-bold">Quantity:</span> 4
              </p>
              <p>
                <span className="font-bold">Total:</span> ₹60
              </p>
              <p>
                <span className="font-bold">Payment:</span>{" "}
                <span className="text-green-600 font-semibold">Completed</span>
              </p>

              {/* Schedule */}
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Schedule</h3>
                <p className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md inline-block mb-2">
                  Pickup Date: 10/09/2025
                </p>
                <p className="bg-green-100 text-green-600 px-3 py-1 rounded-md inline-block">
                  Delivery Date: 12/09/2025
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
     <div className="w-full flex justify-center ">
         <Card className="w-full max-w-3xl shadow-md rounded-3xl overflow-hidden p-0 ">
        {/* Header */}
        <CardHeader className="bg-teal-500 text-white flex justify-between items-center p-2 px-4 ">
          <div>
            <CardTitle className="text-sm font-semibold">
              Order ORD-001
            </CardTitle>
            <p className="text-[9px]">Placed on 9/09/2025</p>
          </div>
          <span className="text-[14px] bg-white text-teal-600 px-1.5 py-0.5 rounded font-medium">
            picked
          </span>
        </CardHeader>

        
        <CardContent className="pb-3 pt-0 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Customer Info */}
            <div>
              <h2 className="text-lg font-bold mb-1">
                Customer Information
              </h2>
              <p>
                <span className="font-bold">Name:</span> Pushpam Singh
              </p>
              <p>
                <span className="font-bold">Phone:</span> +91 9304790616
              </p>
              <p>
                <span className="font-bold">Address:</span> 123 Indrapuri,
                Ranchi, Jharkhand 834005, Lakshmi Apartment
              </p>

              {/* Order Progress */}
               <div className="mt-2">
                <h3 className="font-bold text-lg mb-1">Order Progress</h3>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                   <Checkbox> <CheckboxIndicator id="picked"  /></Checkbox>
                    <label htmlFor="picked" className="text-xs font-semibold">
                      Picked Up
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="washed" />
                    <label htmlFor="washed" className="text-xs font-semibold">Washed</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="packed" />
                    <label htmlFor="packed" className="text-xs font-semibold">Packed</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="delivered" />
                    <label htmlFor="delivered" className="text-xs font-semibold">Delivered</label>
                  </div>
                </div>
                </div>
            </div>

            {/* Order Details */}
            <div>
              <h2 className="text-lg font-bold mb-1">Order Details</h2>
              <p>
                <span className="font-bold">Items:</span> Shirt-2, Pant-2
              </p>
              <p>
                <span className="font-bold">Quantity:</span> 4
              </p>
              <p>
                <span className="font-bold">Total:</span> ₹60
              </p>
              <p>
                <span className="font-bold">Payment:</span>{" "}
                <span className="text-green-600 font-semibold">Completed</span>
              </p>

              {/* Schedule */}
              <div className="mt-2">
                <h3 className="font-bold text-lg mb-1">Schedule</h3>
               <div className="flex flex-col w-full gap-2 ">
                <div className="w-full bg-blue-100 h-[50px] pr-10 mr-10 rounded-lg ">
                   <p className=" text-blue-600 px-2 py-0.5 text-[14px] rounded-md inline-block mb-1">
                  Pickup Date
                </p>
                <p className="px-2 py-0.5 ">
                   10/09/2025
                </p>
                </div>
                <div className=" bg-green-100 h-[50px] rounded-lg">
                   <p className=" text-green-600 px-2 py-0.5 text-[14px] rounded-md inline-block">
                  Delivery Date: 
                </p>
                <p className="px-2 py-0.5 text-[12px]">
                  12/09/2025
                </p>
                </div>
               </div>
               
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
     </div>
    </div>
  );
}
