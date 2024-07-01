
import Avatar from "@/components/Avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"


function Chatbot() {
  return (
    <div className="flex flex-col rounded-md md:flex-row justify-center items-center bg-white md:space-x-10 m-10 p-5 ">
      <Avatar seed="create-chatbot" className="" ></Avatar>
      <div>
        <h1 className="text-xl lg:text-3xl font-semibold">Create</h1>
        <h2 className="font-light ">Create a new chatbot to assist you in your conversations with your customers.</h2>
        <div className="flex   items-center">
        <form className=" mt-5 gap-2 flex flex-col md:flex-row">
          <Input className=" w-full"
          placeholder="Chatbot Name"
          type="text"
          required>
          </Input>

          <Button>Create Chatbot</Button>
        </form>
        
        </div>
        
        
      </div>
    </div>
  )
}

export default Chatbot