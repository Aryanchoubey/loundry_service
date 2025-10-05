import {

  CheckCircle,
  Clock,
  Package,
 
  TrendingUp,
  XCircle,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import { useNavigate } from "react-router-dom";
type Customer = {
  name: string;
  phone: string;
};

type Order = {
  id: string;
  date: string;
  status: "Pending" | "Picked" | "Washed" | "Delivered";
  customer: Customer;
  items: string;
  payment: string;
  pickup: string;
  delivery: string;
  total: string;
};

const orders: Order[] = [
  {
    id: "ORD-002",
    date: "8/09/2025",
    status: "Pending",
    customer: { name: "Pushpam Singh", phone: "+91 9304790816" },
    items: "Shirt-2, Pant-2",
    payment: "Completed",
    pickup: "10/09/2025",
    delivery: "12/09/2025",
    total: "₹60",
  },
  {
    id: "ORD-002",
    date: "8/09/2025",
    status: "Pending",
    customer: { name: "Pushpam Singh", phone: "+91 9304790816" },
    items: "Shirt-2, Pant-2",
    payment: "Completed",
    pickup: "10/09/2025",
    delivery: "12/09/2025",
    total: "₹60",
  },
  {
    id: "ORD-002",
    date: "8/09/2025",
    status: "Washed",
    customer: { name: "Pushpam Singh", phone: "+91 9304790816" },
    items: "Shirt-2, Pant-2",
    payment: "Completed",
    pickup: "10/09/2025",
    delivery: "12/09/2025",
    total: "₹60",
  },
  {
    id: "ORD-002",
    date: "9/09/2025",
    status: "Delivered",
    customer: { name: "Pushpam Singh", phone: "+91 9304790816" },
    items: "Shirt-2, Pant-2",
    payment: "Completed",
    pickup: "10/09/2025",
    delivery: "12/09/2025",
    total: "₹60",
  },
  {
    id: "ORD-002",
    date: "9/09/2025",
    status: "Delivered",
    customer: { name: "Pushpam Singh", phone: "+91 9304790816" },
    items: "Shirt-2, Pant-2",
    payment: "Completed",
    pickup: "10/09/2025",
    delivery: "12/09/2025",
    total: "₹60",
  },
  {
    id: "ORD-002",
    date: "9/09/2025",
    status: "Pending",
    customer: { name: "Pushpam Singh", phone: "+91 9304790816" },
    items: "Shirt-2, Pant-2",
    payment: "Completed",
    pickup: "10/09/2025",
    delivery: "12/09/2025",
    total: "₹60",
  },
];

const statusColors: Record<Order["status"], string> = {
  Pending: "bg-yellow-400 text-black",
  Picked: "bg-emerald-500 text-white",
  Washed: "bg-green-400 text-white",
  Delivered: "bg-blue-500 text-white",
};

export default function UserDashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full flex bg-gray-100 flex-col py-2 ">
      <div className="flex justify-center px-10 py-3 ">
        <header className="w-full flex items-center justify-between shadow-md  shadow-gray-500 px-2 border-2 rounded-xl sm:px-4 py-2 sm:py-3">
          <nav className="flex flex-row justify-between w-full ">
            <div className="flex px-10 ">
              <h2 className="text-black font-bold text-lg sm:text-sm md:text-lg">
                Aryan kumar
              </h2>
            </div>
            <div>
              <Button
                onClick={() => navigate("/logIn")}
                className=" bg-transparent text-white px-2 sm:px-4 text-xs sm:text-sm"
              >
                <img
                  src="/logoutlogo.svg"
                  alt=""
                  className="h-3 w-3 sm:h-5 sm:w-5"
                />
                <span className="font-semibold text-xs text-red-500 sm:text-lg">
                  LogOut
                </span>
              </Button>
            </div>
          </nav>
        </header>
      </div>
      <section className="w-full flex sm:flex-row flex-col gap-5 justify- py-2 gap-x-20 ">
        <div className=" px-10 py">
          <div className="rounded-full bg-white w-[300px] h-[280px] justify-center flex shadow-md  shadow-gray-600 mx-10 ">
            <div className="w-full flex justify-center items-center ">
              <img className="h-[220px]" src="/avatar.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20  gap-y-10 md:w-2/4">
          <Card className="shadow-sm rounded-xl">
            <CardContent className="">
              <div className="flex flex-col ite  justify-between">
                <p className="text-gray-500">Total orders</p>
                <p className="text-xl font-semibold text-emerald-600">3</p>
              </div>
              
            </CardContent>
          </Card>

          <Card className="shadow-sm rounded-xl">
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="text-gray-500">Pending orders</p>
                <p className="text-xl font-semibold text-yellow-600">3</p>
              </div>
              <Clock className="w-10 h-10 text-yellow-500" />
            </CardContent>
          </Card>

          <Card className="shadow-sm rounded-xl">
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="text-gray-500">Picked orders</p>
                <p className="text-xl font-semibold text-green-600">3</p>
              </div>
              <Package className="w-10 h-10 text-green-500" />
            </CardContent>
          </Card>

          <Card className="shadow-sm rounded-xl">
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="text-gray-500">Completed</p>
                <p className="text-xl font-semibold text-blue-600">3</p>
              </div>
              <TrendingUp className="w-10 h-10 text-blue-500" />
            </CardContent>
          </Card>
        </div>
      </section>
      <div className="sm:flex sm:flex-row flex flex-col  w-full h-fit   my-10 justify-center items-center  ">
        <div className=" px-20 w-[90%] flex flex-col gap-4 shadow-lg shadow-gray-600 bg-white pb-5 pt-2 h-fit rounded-2xl ">
          <div className="flex flex-row justify-center w-fit items-center gap-4">
            <div>
              <img className="w-8" src="filterlogo.svg" alt="" />
            </div>
            <div>
              <h1 className=" font-bold text-2xl text-gray-800 ">
              Filter Orders
            </h1>
            </div>
          </div>

          <div className="sm:flex sm:flex-row flex flex-col sm:gap-0 gap-5  justify-between  ">
            <div>
              <Button className=" h-[45px] w-[180px] bg-teal-500  px-2 sm:px-4 text-xs sm:text-sm">
                <h1 className=" font-bold ">All Orders (3)</h1>
              </Button>
            </div>
            <div>
              <Button className=" h-[45px] w-[180px] border-2 border-yellow-400 bg-transparent px-2 sm:px-4 text-xs sm:text-sm">
                <h1 className="text-yellow-400 font-bold ">Pending (3)</h1>
              </Button>
            </div>
            <div>
              <Button className=" h-[45px] w-[180px] border-2 border-teal-500 bg-transparent  px-2 sm:px-4 text-xs sm:text-sm">
                <h1 className="font-bold text-teal-500 ">Picked (3)</h1>
              </Button>
            </div>
            <div>
              <Button className=" h-[45px] w-[180px] border-2 border-green-500 bg-transparent  px-2 sm:px-4 text-xs sm:text-sm">
                <h1 className="font-bold text-green-500 ">Washed (3)</h1>
              </Button>
            </div>
            <div>
              <Button className=" h-[45px] w-[180px] border-2 border-blue-500 bg-transparent px-2 sm:px-4 text-xs sm:text-sm">
                <h1 className="text-blue-500 font-bold">Delivered (3)</h1>
              </Button>
            </div>
            <div className=" flex    ">
              <Button className=" h-[45px] w-[180px] border-2 border-red-600 bg-transparent px-2 sm:px-4 text-xs sm:text-sm">
                <h1 className="text-red-600 font-bold">Payment History</h1>
              </Button>
            </div>
          </div>
        </div>

        {/* <Tabs defaultValue="all" className="w-full flex  items-center">
        <TabsList className="flex flex-wrap gap-2 items-center ">
          <TabsTrigger value="all">All Orders (3)</TabsTrigger>
          <TabsTrigger value="pending">Pending (3)</TabsTrigger>
          <TabsTrigger value="picked">Picked (3)</TabsTrigger>
          <TabsTrigger value="washed">Washed (3)</TabsTrigger>
          <TabsTrigger value="delivered">Delivered (3)</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
        </TabsList>
      </Tabs> */}
      </div>

      {/* ✅ Orders Grid */}
      {/* <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-20 px-3 gap-x-10 gap-y-10 ">
        {orders.map((order, i) => (
          <Card
            key={i}
            className="rounded-2xl shadow-md border border-gray-200 flex flex-col p-0"
          >
            <CardHeader className="flex flex-row items-center justify-between bg-teal-500 rounded-t-2xl p-3">
              <div>
                <CardTitle className="text-white text-sm font-medium">
                  Order {order.id}
                </CardTitle>
                <p className="text-xs text-white/80">Placed on {order.date}</p>
              </div>
              <div
                className={`flex  w-[100px] h-[35px] justify-center items-center rounded-3xl text-xs font-semibold ${
                  statusColors[order.status]
                }`}
              >
                {order.status}
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-0 text-sm pt-0">
              <div className="flex flex-col w-full pr-5 ">
                <div className="w-full flex sm:flex-row flex-col  gap-5 ">

                  <div className="flex flex-col sm:w-[70%] w-full gap-3 sm:mb-1 mb-4 ">
                    <div>
                      <h3 className="font-bold sm:text-sm text-xl ">Customer Information</h3>
                    </div>
                    <div className=" flex flex-col sm:gap-2 gap-1">
                      <p className="sm:text-sm text-lg ">
                        <span className="font-semibold ">Name:</span>{"  "}
                        {order.customer.name}
                      </p>
                      <p className="sm:text-sm text-lg ">
                        <span className="font-semibold">Phone:</span>{" "}
                        {order.customer.phone}
                      </p>
                    </div>
                    <div className="bg-blue-100 text-blue-700 px-2 py-1 w-full h-[50px] flex flex-col  justify-center rounded-md text-xs  ">
                      <div >
                        <p className="font-semibold">Pickup Date</p>
                      </div>
                      <div className="text-black">{order.pickup}</div>
                    </div>
                  </div>
                   <div className=" flex flex-col gap-10 sm:w-[50%] w ">
                    <div className="flex flex-col sm:gap-3 gap-1">
                     <div className="flex flex-col  gap-3 ">
                       <div className="sm:text-sm text-xl ">
                        <h3 className="font-bold">Order Details</h3>
                      </div>
                     <div className="flex flex-col gap-2 justify-end pb- sm:pb-0 ">
                       <p className="sm:text-sm text-lg ">
                        <span className="font-semibold">Items:</span>{" "}
                        {order.items}
                      </p>
                      <p className="flex items-center gap-1  sm:text-sm text-lg  ">
                        <span className="font-semibold">Payment:</span>{" "}
                        {order.payment}{" "}
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </p>
                     </div>
                     </div>
                      <div className="grid sm:grid-cols-2 gap-2 mt-  ">
                        <div className="bg-green-100 text-green-700 px-2 py- sm:w-[180px] sm:h-[50px] w-full h-[50px] rounded-md text-xs  flex flex-col justify-center  ">
                         <div>
                          <p className="font-semibold"> Delivery</p>
                         </div>
                          <div className="text-black">
                            {order.delivery}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div className="w-full h-full flex flex-row gap-5 mt-5">
  {/* Total Amount */}
  <div className="flex items-center flex-1 h-[40px] border-2 px-2 rounded-3xl border-teal-500 justify-between">
    <p className="font-semibold">Total Amount</p>
    <p className="font-bold">{order.total}</p>
  </div>

  {/* Cancel Button (only if Pending) */}
  {order.status === "Pending" && (
    <div className="flex flex-col justify-end items-end">
      <Button
        variant="destructive"
        className="w-fit flex items-center gap-2 rounded-3xl justify-end"
      >
        <XCircle className="h-4 w-4" /> Cancel
      </Button>
    </div>
  )}
</div>

              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
