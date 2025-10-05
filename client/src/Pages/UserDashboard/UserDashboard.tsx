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
    id: "ORD-003",
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
    id: "ORD-004",
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
    id: "ORD-005",
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
    id: "ORD-006",
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
    id: "ORD-007",
    date: "9/09/2025",
    status: "Pending",
    customer: { name: "Pushpam Singh", phone: "+91 9304790816" },
    items: "Shirt-2, Pant-2",
    payment: "pending",
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
    <div className="min-h-screen w-full flex bg-gray-100 flex-col py-2">
      <div className="flex justify-center px-2 sm:px-10 py-3">
        <header className="w-full flex items-center justify-between shadow-md shadow-gray-500 px-2 border-2 rounded-xl sm:px-4 py-2 sm:py-3">
          <nav className="flex flex-row justify-between w-full">
            <div className="flex px-2 sm:px-10">
              <h2 className="text-black font-bold text-lg sm:text-sm md:text-lg">
                Aryan kumar
              </h2>
            </div>
            <div>
              <Button
                onClick={() => navigate("/logIn")}
                className="bg-transparent text-white px-2 sm:px-4 text-xs sm:text-sm"
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
      <section className="w-full flex flex-col sm:flex-row gap-5 py-2 sm:gap-x-20 items-center">
        <div className="w-full sm:w-auto flex justify-center px-0 sm:px-10">
          <div className="rounded-full bg-white w-[180px] h-[180px] sm:w-[300px] sm:h-[280px] flex justify-center items-center shadow-md shadow-gray-600 mx-0 sm:mx-10">
            <img className="h-[120px] sm:h-[220px]" src="/avatar.svg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-20 sm:gap-y-10 w-full sm:w-2/4 px-2 sm:px-0">
          <Card className="shadow-sm rounded-xl">
            <CardContent>
              <div className="flex flex-col justify-between">
                <p className="text-gray-500 text-xs sm:text-base">Total orders</p>
                <p className="text-lg sm:text-xl font-semibold text-emerald-600">6</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-sm rounded-xl">
            <CardContent className="flex items-center justify-between p-2 sm:p-4">
              <div>
                <p className="text-gray-500 text-xs sm:text-base">Pending orders</p>
                <p className="text-lg sm:text-xl font-semibold text-yellow-600">3</p>
              </div>
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />
            </CardContent>
          </Card>
          <Card className="shadow-sm rounded-xl">
            <CardContent className="flex items-center justify-between p-2 sm:p-4">
              <div>
                <p className="text-gray-500 text-xs sm:text-base">Picked orders</p>
                <p className="text-lg sm:text-xl font-semibold text-green-600">0</p>
              </div>
              <Package className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
            </CardContent>
          </Card>
          <Card className="shadow-sm rounded-xl">
            <CardContent className="flex items-center justify-between p-2 sm:p-4">
              <div>
                <p className="text-gray-500 text-xs sm:text-base">Completed</p>
                <p className="text-lg sm:text-xl font-semibold text-blue-600">2</p>
              </div>
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
            </CardContent>
          </Card>
        </div>
      </section>
      <div className="w-full flex flex-col sm:flex-row my-6 sm:my-10 justify-center items-center">
        <div className="w-full sm:w-[90%] flex flex-col gap-4 shadow-lg shadow-gray-600 bg-white pb-5 pt-2 h-fit rounded-2xl px-2 sm:px-20">
          <div className="flex flex-row justify-center items-center gap-2 sm:gap-4">
            <img className="w-6 sm:w-8" src="filterlogo.svg" alt="" />
            <h1 className="font-bold text-lg sm:text-2xl text-gray-800">
              Filter Orders
            </h1>
          </div>
          <div className="flex overflow-x-auto sm:overflow-visible gap-2 sm:gap-0 justify-between py-2">
            <Button className="h-[40px] min-w-[120px] sm:h-[45px] sm:w-[180px] bg-teal-500 px-2 sm:px-4 text-xs sm:text-sm">
              <h1 className="font-bold">All Orders (6)</h1>
            </Button>
            <Button className="h-[40px] min-w-[120px] sm:h-[45px] sm:w-[180px] border-2 border-yellow-400 bg-transparent px-2 sm:px-4 text-xs sm:text-sm">
              <h1 className="text-yellow-400 font-bold">Pending (3)</h1>
            </Button>
            <Button className="h-[40px] min-w-[120px] sm:h-[45px] sm:w-[180px] border-2 border-teal-500 bg-transparent px-2 sm:px-4 text-xs sm:text-sm">
              <h1 className="font-bold text-teal-500">Picked (0)</h1>
            </Button>
            <Button className="h-[40px] min-w-[120px] sm:h-[45px] sm:w-[180px] border-2 border-green-500 bg-transparent px-2 sm:px-4 text-xs sm:text-sm">
              <h1 className="font-bold text-green-500">Washed (1)</h1>
            </Button>
            <Button className="h-[40px] min-w-[120px] sm:h-[45px] sm:w-[180px] border-2 border-blue-500 bg-transparent px-2 sm:px-4 text-xs sm:text-sm">
              <h1 className="text-blue-500 font-bold">Delivered (2)</h1>
            </Button>
            <Button className="h-[40px] min-w-[120px] sm:h-[45px] sm:w-[180px] border-2 border-red-600 bg-transparent px-2 sm:px-4 text-xs sm:text-sm">
              <h1 className="text-red-600 font-bold">Payment History</h1>
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-10 px-2 gap-x-4 gap-y-8">
        {orders.map((order, i) => (
          <Card
            key={i}
            className="w-full max-w-md mx-auto rounded-2xl shadow-md border border-gray-200 flex flex-col p-0"
          >
            <CardHeader className="flex flex-row items-center justify-between bg-teal-500 rounded-t-2xl p-3">
              <div>
                <CardTitle className="text-white text-base sm:text-sm md:text-sm font-medium">
                  Order {order.id}
                </CardTitle>
                <p className="text-base sm:text-sm md:text-sm text-white/80">Placed on {order.date}</p>
              </div>
              <div
                className={`flex w-[80px] sm:w-[100px] h-[30px] sm:h-[35px] justify-center items-center rounded-3xl text-base sm:text-sm md:text-sm font-semibold ${statusColors[order.status]}`}
              >
                {order.status}
              </div>
            </CardHeader>
            <CardContent className="p-2 sm:p-4 space-y-0 pt-0">
              <div className="flex flex-col w-full pr-0 sm:pr-5">
                <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <div className="flex flex-col sm:w-[70%] w-full gap-2 sm:gap-3 sm:mb-1 mb-4">
                    <h3 className="font-bold text-base sm:text-sm md:text-sm">Customer Information</h3>
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <p className="text-base sm:text-sm md:text-sm">
                        <span className="font-semibold">Name:</span> {order.customer.name}
                      </p>
                      <p className="text-base sm:text-sm md:text-sm">
                        <span className="font-semibold">Phone:</span> {order.customer.phone}
                      </p>
                    </div>
                    <div className="bg-blue-100 text-blue-700 px-2 py-1 w-full h-[40px] sm:h-[50px] flex flex-col justify-center rounded-md text-base sm:text-sm md:text-sm">
                      <p className="font-semibold">Pickup Date</p>
                      <div className="text-black">{order.pickup}</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 sm:gap-10 sm:w-[50%] w-full">
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <h3 className="font-bold text-base sm:text-sm md:text-sm">Order Details</h3>
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <p className="text-base sm:text-sm md:text-sm">
                          <span className="font-semibold">Items:</span> {order.items}
                        </p>
                        <p className="flex items-center gap-1 text-base sm:text-sm md:text-sm">
                          <span className="font-semibold">Payment:</span> {order.payment}
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        <div className="bg-green-100 text-green-700 px-2 py-1 w-full sm:w-[180px] h-[40px] sm:h-[50px] rounded-md text-base sm:text-sm md:text-sm flex flex-col justify-center">
                          <p className="font-semibold">Delivery</p>
                          <div className="text-black">{order.delivery}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4 sm:mt-5">
                  <div className="flex items-center flex-1 h-[50px] sm:h-[50px] border-2 px-2 rounded-3xl border-teal-500 justify-between">
                    <p className="font-semibold text-base sm:text-sm md:text-sm">Total Amount</p>
                    <p className="font-bold text-base sm:text-sm md:text-sm">{order.total}</p>
                  </div>
                  {order.status === "Pending" && (
                    <div className="flex flex-col rounded-3xl h-[50px] bg-red-600  border-1 justify-center items-end mt-2 sm:mt-0">
                      <Button
                        variant="destructive"
                        className="w-fit flex items-center gap-2 rounded-3xl justify-end   sm:text-sm md:text-sm"
                      >
                        <XCircle className="h-5 w-5" /> Cancel
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