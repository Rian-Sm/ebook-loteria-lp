function Button ({text}:{text:string | undefined}){
    return (
        <button className='flex btn-background-gradient rounded-full items-center justify-center px-5 py-1 w-70 h-15 max-lg:w-60 max-lg:h-12 '>
            <p className='font-[PlusJakartaSans] text-white text-2xl max-lg:text-lg '>{text || 'Quero meu ebook'}</p>
        </button>
    )
}

export default Button