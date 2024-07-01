import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=" flex flex-col flex-1">

      <Header></Header>
      <div className="flex flex-col  lg:flex-row bg-gray-100 ">
        {/* sidebar */}
        <Sidebar></Sidebar>
        <div className="flex  justify-center lg:justify-start border items-start max-w-5xl mx-auto w-full">
          {children}
          
        </div>
      
      </div>
    </div>
  )
}