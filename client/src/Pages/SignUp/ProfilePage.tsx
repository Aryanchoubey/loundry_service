

import { Button } from "../../components/ui/button"

export default function ProfilePage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* ✅ Header */}
      <header className="w-full flex items-center justify-between bg-[#021427] shadow px-2 sm:px-4 py-2 sm:py-3">
        {/* Logo */}
        <div className="flex items-center gap-1 sm:gap-2">
          <img src="/shirt.svg" alt="logo" className="h-6 w-6 sm:h-6 sm:w-6" />
          <h2 className="text-white font-bold text-lg sm:text-sm md:text-lg">
            SparkleClean
          </h2>
        </div>

        {/* Navbar */}
        <nav className="flex gap-2 sm:gap-4 md:gap-8">
          <Button className="bg-transparent text-white shadow-none hover:bg-transparent hover:text-white px-1 sm:px-2">
            <img src="/homelogo.svg" alt="" className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="font-bold text-xs sm:text-sm">Home</span>
          </Button>
          <Button className="bg-transparent text-white border-1 border-teal-600 shadow-none hover:bg-transparent hover:text-white px-1 sm:px-2">
            <img src="/loginimg.svg" alt="" className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="font-bold text-xs sm:text-sm">Login</span>
          </Button>
          <Button className="bg-teal-600 text-white px-2 sm:px-4 text-xs sm:text-sm">
           <img src="/signupimg.svg" alt="" className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="font-bold text-xs sm:text-sm">SignUp</span>
          </Button>
        </nav>
      </header>
       <main className="flex flex-1 justify-center sm:items-center  p-2 sm:p-4">
        <div className="flex bg-teal-100 w-full items-center justify-center max-w-[1080px] sm:h-[650px] h-[650px] rounded-2xl">
          <div className="bg-teal-600 max-w-[1000px] sm:h-auto py-4 rounded-2xl shadow-xl  flex flex-col w-full overflow-hidden">
            {/* Inside Logo */}
            <div className=" px-5 mx-10 py-5 gap-8 flex flex-col pt-3 sm:px-6 sm:pt-4">
              <h1 className="font-bold text-lg sm:text-lg flex items-center gap-1 sm:gap-2 text-white">
                <img src="/shirt.svg" alt="" className="h-6 w-6 sm:h-6 sm:w-6" />
                SparkleClean
              </h1>
              <div className="w-full bg-white rounded-2xl">
                
                   <div className="w-full flex items-center justify-center rounded-2xl py-6  ">
                    <div className=" rounded-full w-[300px] py-4 flex justify-center items-center shadow-lg shadow-gray-400 ">
                      <div className="w-[150px] flex justify-center rounded-full h-[250px]">
                      <img src="/avatar.svg" alt="" />
                    </div>
                    </div>
                   </div>
                  <div className="flex flex-col w-full justify-center gap-3 py-2 items-center">
                     <Button className= "bg-teal-600 rounded-none text-xl font-bold sm:w-[300px] ">
                      <img src="/changeavtar.svg" alt="" />
                      Change Avatar</Button>
                     <Button className="rounded-none sm:w-[300px] text-black font-bold text-xl bg-gray-300 " >Aryan Kumar</Button>
                     <Button className="bg-teal-600  font-bold sm:w-[700px] w-[250px] rounded-b-sm text-xl ">Complete Profile</Button>
                  </div>
                  
              </div>
            </div>

           
           
          </div>
        </div>
      </main>
      </div>
  )
}
