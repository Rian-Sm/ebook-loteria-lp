function  BlockDescription ({text, description}:{text:string, description: string}){
    return (
        <div className='flex  flex-col bg-white p-5 gap-2 rounded-3xl border border-[#1212122c]'>
            <div className='flex flex-col gap-2'>  
                <p className='text-[#911787] font-bold text-lg'>{text}</p>
                <p className='text-[#4F4F4F] text-lg  max-lg:text-base'>{description}</p>
            </div>
        </div>
    )
}

export default BlockDescription