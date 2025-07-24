import  { ReactComponent as Star}  from './assets/shooting_star.svg'
import image1 from './assets/woman_playing.png'
import './App.css'

function App() {

  return (
    <>
    <header className='w-full px-40 py-4  bg-[#DDD6FB]' >
        <div className="flex p-1 w-20 rounded-sm border-1 border-solid border-black items-center justify-center">
          <a target='_blank'>
            <span className=''>
              <p className='text-sm'>Logotipo</p>
            </span>
          </a>
        </div>
    </header>
    <main>
      <div className='banner-background-gradient px-40 flex pt-10 w-full'>
        <div className='flex w-1/2 flex-col align-start justify-center gap-4 '>
          <h1 className='font-bold text-3xl'>Existe fórmula para ganhar na loteria? </h1>
          <p className=''>Você ainda aposta no escuro? Descubra como jogar com estratégia! <strong>Cadastre-se e</strong> faça
o download</p>
          <button className='flex btn-background-gradient rounded-full items-center justify-center px-5 py-1 w-1/2 '>
            <p className='text-white'>Quero meu ebook</p>
          </button>
        </div>
        <div className=' float-left relative w-1/2 '>
          <div  className='absolute top-5 z-0 svg-star-with-blur w-full'>
            <Star className='w-full' />
          </div>
           <div className='flex w-full ml-auto mr-auto justify-center'>
             <img className='relative z-0' src={image1} alt="Woman Playing" />
           </div>
         </div>
        </div>

      <div className='h-10 px-40 bg-[#EDEAFE] pt-10 w-full'>
          <div className="w-full align-middle justify-center flex pt-5">
            <h2 className='font-bold text-2xl'>O que você vai aprender:</h2>
          </div>

          <div className='flex flex-col w-full'>
            <div className="cardList">
              <div className="card">
                <div className="card-background"></div>
                <div className="card-icon"></div>  

                <h3 className="font-bold">Aprenda a jogar com estratégia</h3>
                <p>Dicas e truques para aumentar suas chances de ganhar.</p>
              </div>
            </div>


            <ul className='list-disc pl-10 pt-5'>
              <li>Como escolher os números da sorte</li>
              <li>Estratégias de apostas vencedoras</li>
              <li>Erros comuns a evitar</li>
              <li>Dicas de especialistas</li>
            </ul>
          </div>
      </div>
            
    </main>
      
     
     
    </>
  )
}

export default App
