import type { ReactNode } from "react"

function Info ({text, icon}:{text:string, icon:ReactNode}){
    return (
     <div className='flex gap-5 items-center'>
        <div className='flex flex-col bg-white min-w-20 h-20 w-20 p-5 rounded-2xl '>
          {icon}
        </div>
        <div className='flex flex-col gap-2'>   
        <p className='text-[#333333] font-600 text-xl tracking-tighter max-lg:text-base font-semibold   '>{text}</p>
        </div>
    </div>
    )
}

export default Info