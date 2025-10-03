"use client";

import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Textarea } from "../../components/ui/textarea";
import { Calendar } from "../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { CalendarIcon, Clock, MinusIcon, PlusIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { format } from "date-fns";
import { Label } from "../../components/ui/label";
import { useNavigate } from "react-router-dom";

export default function OrderPage() {
  const navigate = useNavigate()
  const [date, setDate] = useState<Date>();
  const [counts, setCounts] = useState({
    shirts: 0,
    pants: 0,
    dresses: 0,
    suits: 0,
    bedsheets: 0,
    blankets: 0,
  });

  const items = [
    { key: "shirts", label: "Shirts", price: 15 },
    { key: "pants", label: "Pants", price: 15 },
    { key: "dresses", label: "Dresses", price: 20 },
    { key: "suits", label: "Suits", price: 35 },
    { key: "bedsheets", label: "Bedsheets", price: 10 },
    { key: "blankets", label: "Blankets Or Quilts", price: 40 },
  ];

  const handleChange = (key: string, value: number) => {
    setCounts((prev) => ({ ...prev, [key]: Math.max(0, value) }));
  };

  const total = items.reduce(
    (sum, item) => sum + counts[item.key as keyof typeof counts] * item.price,
    0
  );

  return (
    <div className="min-h-screen flex flex-col gap-3 justify-center items-center py-10 px-4">
      <Card className="w-full max-w-6xl border-teal-50">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-black">
            Create New Order
          </CardTitle>
          <p className="text-center text-lg font-semibold text-gray-600">
            Select your items and schedule pickup time.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Select Items */}
          <div>
            <h2 className="font-semibold mb-3 text-lg text-black">
              Select items
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between border border-teal-300 rounded-lg p-3 bg-white"
                >
                  <div>
                    <p className="font-bold text-gray-800">{item.label}</p>
                    <p className="text-sm font-bold text-gray-500">₹{item.price} each</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                    
                      variant="outline"
                      size="icon"
                      className=" rounded-full border-black text-black hover:bg-teal-50"
                      onClick={() =>
                        handleChange(
                          item.key,
                          counts[item.key as keyof typeof counts] - 1
                        )
                      }
                    >
                       
                      <MinusIcon></MinusIcon>
                    </Button>
                    <span className="font-semibold">
                      {counts[item.key as keyof typeof counts]}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className=" rounded-full bg-green-600 text-black hover:bg-green-600 "
                      onClick={() =>
                        handleChange(
                          item.key,
                          counts[item.key as keyof typeof counts] + 1
                        )
                      }
                    >
                      <PlusIcon></PlusIcon>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Address Form */}
          <div>
            <h2 className="font-semibold mb-3 text-lg">
              Customer Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              <div className="flex flex-row items-center gap-2">
                <Label htmlFor="name" className="w-14 font-semibold ">
                  Name:
                </Label>
                <Input
                  id="name"
                  className="flex-1 border-teal-300 focus-visible:ring-teal-500"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <Label htmlFor="area" className="w-14 font-semibold ">
                  Area :
                </Label>
                <Input
                  id="area"
                  className="flex-1 border-teal-300 focus-visible:ring-teal-500"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <Label htmlFor="house" className="w-18 font-semibold ">
                  House No.:
                </Label>
                <Input
                  id="house"
                  className="flex-1 border-teal-300 focus-visible:ring-teal-500"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <Label htmlFor="city" className="w-14 font-semibold ">
                  City:
                </Label>
                <Input
                  id="city"
                  className="flex-1 border-teal-300 focus-visible:ring-teal-500"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <Label htmlFor="phone" className="w-14 font-semibold ">
                  Phone :
                </Label>
                <Input
                  id="phone"
                  className="flex-1 border-teal-300 focus-visible:ring-teal-500"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <Label htmlFor="state" className="w-14 font-semibold ">
                  State:
                </Label>
                <Input
                  id="state"
                  className="flex-1 border-teal-300 focus-visible:ring-teal-500"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <Label htmlFor="alt" className="w-22 font-semibold ">
                  Alternate No.:
                </Label>
                <Input
                  id="alt"
                  className="flex-1 border-teal-300 focus-visible:ring-teal-500"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <Label htmlFor="pincode" className="w-14 font-semibold ">
                  Pincode:
                </Label>
                <Input
                  id="pincode"
                  className="flex-1 border-teal-300 focus-visible:ring-teal-500"
                />
              </div>
              <div className="flex flex-row items-center gap-2 sm:col-span-2">
                <Label htmlFor="nearby" className="w-14 font-semibold ">
                  Nearby:
                </Label>
                <Input
                  id="nearby"
                  className="flex-1 border-teal-300 focus-visible:ring-teal-500"
                />
              </div>
            </div>
          </div>
          {/* Pickup Schedule */}
          {/* Pickup Schedule */}
          {/* Pickup Schedule */}
          <div>
            <h2 className="font-semibold mb-3 text-lg">
              Schedule Pickup
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date Picker */}
              <div className="flex flex-col gap-2">
                <Label className="text-gray-700 font-semibold ">Pickup Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-teal-500 text-teal-700 hover:bg-teal-50"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "dd-MM-yyyy") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Picker */}
              <div className="flex flex-col gap-2">
                <Label className="text-gray-700  font-semibold">Pickup Time</Label>
                <Select>
                  <SelectTrigger className="w-full border-teal-500 text-teal-700">
                    <Clock className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9am">9:00 AM</SelectItem>
                    <SelectItem value="12pm">12:00 PM</SelectItem>
                    <SelectItem value="3pm">3:00 PM</SelectItem>
                    <SelectItem value="6pm">6:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <h2 className="font-semibold mb-3 text-lg">
              Special Instructions
            </h2>
            <Textarea
              placeholder="Add any special instructions (e.g., delicate wash, extra starch, fabric softener...)"
              className="border-teal-300 focus-visible:ring-teal-500"
            />
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="font-semibold mb-3  text-lg">Order Summary</h2>
            <div className="space-y-2 bg-white p-4 rounded-lg border border-teal-300">
              {items.map(
                (item) =>
                  counts[item.key as keyof typeof counts] > 0 && (
                    <div
                      key={item.key}
                      className="flex justify-between text-gray-700"
                    >
                      <span>
                        {item.label} × {counts[item.key as keyof typeof counts]}
                      </span>
                      <span>
                        ₹{counts[item.key as keyof typeof counts] * item.price}
                      </span>
                    </div>
                  )
              )}
              <div className="flex justify-between font-bold border-t pt-2 text-teal-700">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>

          
        </CardContent>
      </Card>
      
        <Button 
          onClick={() => navigate("/paymentpage")}
        className="w-full max-w-3xl h-[40px] bg-teal-600 hover:bg-teal-700 text-lg font-bold text-white">
            Create Order
          </Button>
      

    </div>
  );
}
