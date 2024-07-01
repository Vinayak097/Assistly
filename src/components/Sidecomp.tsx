    import React from 'react'

function Sidecomp({head,par,image}:{head:string,par:string,image:string}) {
  return (
    <>
        <div className='bg-blue-500 w-[100px] shadow-md text-white p-2 flex flex-col lg:flex-row justify-center gap-1 items-center rounded-md'>
            <div className='text-sm'>
                {image}
            </div>
            <div>
                <p className='text-sm '>{head}</p>
                <p className='text-xs opacity-95'>{par}</p>

            </div>
        </div>
    </>
    

  )
}

export default Sidecomp