import React from 'react'
import Avatar from './Avatar'
import Link from 'next/link'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
function Header() {
  return (
    
    <header className='p-5 flex shadow-sm text-gray-800 justify-between items-center'>
        <Link href="/" className='flex items-center text-4xl font-thin'>
        <Avatar  seed='PAPAFAM Support Agent'/>
            <div className='space-y-1'>
                <h1>Assistly</h1>
                <h2 className='text-sm'>Your Customizable Ai chat Agent</h2>
            </div>
        </Link>
        <div className='     '>

          <SignedIn>
            <UserButton showName></UserButton>
          </SignedIn>

          <SignedOut>
            <SignInButton></SignInButton>
          </SignedOut>          

        </div>
    </header>
        

    
  )
}

export default Header