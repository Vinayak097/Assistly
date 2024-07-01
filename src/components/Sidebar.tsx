import React from 'react'
import Link from 'next/link'
import { BotMessageSquare, PencilLine, SearchIcon } from 'lucide-react'
import Sidecomp from './Sidecomp'
function Sidebar() {
  return (
    <div className='bg-white text-white p-5'>
        <ul className='gap-5 flex lg:flex-col'>
            <li className='flex-1 '>
                <Link href="/create-chatbot" className='hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#2991EE]' >
                    <BotMessageSquare className='h-6 w-6 lg:h-6 lg:w-6'></BotMessageSquare>
                    <div className='hidden md:inline'>
                        <p className='text-xl'>Create</p>
                        <p className='text-sm font-extralight'>New Chatbot</p>
                        </div>    
                </Link>
            </li>
            <li className='flex-1'>
                
                <Link href="/view-chatbots" className=' hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#2991EE]' >
                <PencilLine></PencilLine>
                <div className='hidden md:inline'>
                        <p className='text-xl'>Edit</p>
                        <p className='text-sm font-extralight'>Chatbots</p>
                </div> 
                </Link>

            </li>
            <li className='flex-1'>
               
                <Link href="/search-bots" className='hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#2991EE]'>
                <SearchIcon></SearchIcon>
                <div className='hidden md:inline'>
                        <p className='text-xl'>View</p>
                        <p className='text-sm font-extralight'>Sessions</p>
                </div> 
                </Link>
            </li>

        </ul>
    </div>
  )
}

export default Sidebar