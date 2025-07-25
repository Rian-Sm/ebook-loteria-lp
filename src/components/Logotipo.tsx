import type React from "react"

const Logotipo : React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        children || 

       <div className="flex p-1 w-40 h-17 max-lg:w-30 max-lg:h-12 rounded-sm border-1 border-solid border-black items-center justify-center">
            <a target='_blank'>  
            <span className=''>
                <p className='font-[inter] text-3xl max-lg:text-xl'>Logotipo</p>
            </span>
            </a>
        </div>   
    )
}

export default Logotipo