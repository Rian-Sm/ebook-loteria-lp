import  { ReactComponent as ShootingStar}  from './assets/shooting_star.svg'
import {ReactComponent as IconA} from './assets/card-icon-a.svg'
import {ReactComponent as IconB} from './assets/card-icon-b.svg'
import {ReactComponent as IconC} from './assets/card-icon-c.svg'
import {ReactComponent as Star} from './assets/star.svg'
import {ReactComponent as BackA} from './assets/card-back-a.svg'
import {ReactComponent as BackB} from './assets/card-back-b.svg'
import {ReactComponent as BackC} from './assets/card-back-c.svg'
import {ReactComponent as BackIconCard} from './assets/background-icon-card.svg'

import { ReactComponent as IconPage } from './assets/icon-page.svg' 
import { ReactComponent as IconList } from './assets/icon-list.svg'
import { ReactComponent as IconMail } from './assets/icon-mail.svg'

import image1 from './assets/woman_playing.png'
import image2 from './assets/woman-point-up-with-masc.png'
import image3 from './assets/man-with tablet.png'

import './App.css'

function App() {

  return (
    <>
    <header className='w-full lg:px-150 md:px-40 py-5 bg-[#DDD6FB]' >
            <div className="flex p-1 w-40 h-17 rounded-sm border-1 border-solid border-black items-center justify-center">
              <a target='_blank'>  
                <span className=''>
                  <p className='text-3xl'>Logotipo</p>
                </span>
              </a>
            </div>  
    </header> 
    <main>
      <div className='banner-background-gradient lg:px-150 md:px-40 flex pt-10 w-full'>
        <div className='flex w-1/2 flex-col align-start justify-center gap-5 '>
          <h1 className='font-bold text-6xl'>Existe fórmula para ganhar na loteria? </h1>
          <p className='text-3xl'>Você ainda aposta no escuro? Descubra como jogar com estratégia! <strong>Cadastre-se e</strong> faça o download</p>
          <button className='flex btn-background-gradient rounded-full items-center justify-center px-5 py-1 w-70 h-15 '>
            <p className='text-white text-2xl '>Quero meu ebook</p>
          </button>
        </div>
        <div className=' float-left relative w-1/2 '>
          <div  className='absolute top-5 z-0 svg-star-with-blur w-full'>
            <ShootingStar className='w-full' />
          </div>
           <div className='flex w-full ml-auto mr-auto justify-center'>
             <img className='relative z-0' src={image1} alt="Woman Playing" />
           </div>
         </div>
      </div>

      <div className='flex flex-col lg:px-150 md:px-40 bg-[#EDEAFE] pt-10 w-full'>
          <div className="w-full align-middle justify-center flex pt-10 mb-10">
            <h2 className='font-bold text-2xl'>O que você vai aprender:</h2>
          </div>

          <div className='flex flex-col w-full'>
            <div className="cardList flex justify-between gap-4">
              <div className="card overflow-hidden rounded-3xl bg-[#E0B00B] w-85 h-70 gap-4 flex flex-col p-4">
                <div className="card-top flex h-30">
                  <div className="card-icon relative  w-23 h-23 mt-auto ">
                    <div className="background-icon-card absolute -mt-5 ">
                      <BackIconCard className='background-icon-card-1 z-0 w-26'></BackIconCard>
                    </div>
                    <div className='relative background-icon-card z-1 p-3 px-3 ml-1.5 card-a'>
                      <Star className='rotate-22 star icon-a mr-auto h-4 w-4'></Star>
                      <IconA className='icon-a mx-auto h-10 w-10 -my-1'></IconA>
                      <Star className='rotate-22 star icon-a ml-auto h-4 w-4'></Star>
                    </div>
                  </div>  
                  <div className="card-background ml-auto -mt-20 -mr-12">
                    <BackA className='card-back-a w-40'></BackA>
                  </div>
                </div>
                <div className="card-bottom flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-white">O que são dedobramentos</h3>
                  <p className='text-white text-md tracking-tighter'>Os desdobramentos são técnicas que aumentam suas chances de premiação, especialmente nas loterias.</p>
                </div>
              </div>
              <div className="card overflow-hidden rounded-3xl bg-[#10BD57] w-85 h-70 gap-4 flex flex-col p-4">
                <div className="card-top flex h-30">
                  <div className="card-icon relative  w-23 h-23 mt-auto">
                    <div className="background-icon-card absolute -mt-5">
                      <BackIconCard className='background-icon-card-2 z-0 w-26'></BackIconCard>
                    </div>
                    <div className='relative background-icon-card z-1 p-3 px-3 ml-1.5 card-a'>
                      <Star className='rotate-22 star icon-b mr-auto h-4 w-4'></Star>
                      <IconB className='icon-b mx-auto h-8 w-8 '></IconB>
                      <Star className='rotate-22 star icon-b ml-auto h-4 w-4'></Star>
                    </div>
                  </div>  
                  <div className="card-background ml-auto -mt-10.5 -mr-9">
                    <BackB className='card-back-b w-30'></BackB>
                  </div>
                </div>
                <div className="card-bottom flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-white">O que são fechamentos</h3>
                  <p className='text-white text-md tracking-tighter'>O fechamento é uma técnica que realmente pode aumentar suas chances de conquistar o prêmio principal da loteria.</p>
                </div>
              </div>
              <div className="card overflow-hidden rounded-3xl bg-[#BB60E9] w-90 h-70 gap-4 flex flex-col p-4">
                <div className="card-top flex h-30">
                  <div className="card-icon relative  w-23 h-23 mt-auto">
                    <div className="background-icon-card absolute -mt-5">
                      <BackIconCard className='background-icon-card-3 z-0 w-26'></BackIconCard>
                    </div>
                    <div className='relative background-icon-card z-1 p-3 px-3 ml-1.5 card-a'>
                      <Star className='rotate-22 star icon-c mr-auto h-4 w-4'></Star>
                      <IconC className='icon-c mx-auto h-8 w-8 '></IconC>
                      <Star className='rotate-22 star icon-c ml-auto h-4 w-4'></Star>
                    </div>
                  </div>  
                  <div className="card-background ml-auto -mt-15 -mr-7.5">
                    <BackC className='card-back-c w-35'></BackC>
                  </div>
                </div>
                <div className="card-bottom flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-white">Calcular probabilidades </h3>
                  <p className='text-white text-md tracking-tighter'>Entender as probabilidades de ganhar é essencial para montar estratégias de jogo mais inteligentes aumentando suas chances.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full align-middle justify-center flex pt-10 mb-10">
            <h2 className='font-bold text-2xl'>E ainda tem mais...</h2>
          </div>

          <div className='flex  justify-between gap-4 w-full'>
            <div className='flex    w-1/3'>
              <img className='object-contain' src={image2} alt="Woman Pointing Up" />
            </div>

            <div className='flex  flex-col   w-2/3  gap-4'>
                <div className='flex  flex-col bg-white p-5 gap-2 rounded-3xl '>
                  <div className='flex flex-col gap-2'>  
                    <p className='text-[#911787] font-bold text-lg'>Análise de combinações</p>
                    <p className='text-[#4F4F4F] text-lg'>A análise de combinações é uma técnica usada para estudar todas as possíveis formações de números em um jogo de loteria.</p>
                  </div>
                </div>

                <div className='flex  flex-col bg-white p-5 gap-2 rounded-3xl '>
                  <div className='flex flex-col gap-2'>  
                    <p className='text-[#911787] font-bold text-lg'>Apostar em bolões de forma estratégica</p>
                    <p className='text-[#4F4F4F] text-lg'>Apostar em bolões é uma maneira inteligente de aumentar suas chances de ganhar na loteria sem precisar gastar muito dinheiro.</p>
                  </div>
                </div>

                <div className='flex  flex-col bg-white p-5 gap-2 rounded-3xl '>
                  <div className='flex flex-col gap-2'>  
                    <p className='text-[#911787] font-bold text-lg'>Os números mais sorteados</p>
                    <p className='text-[#4F4F4F] text-lg'>Os números mais sorteados nas loterias brasileiras variam de acordo com o tipo de jogo, mas algumas dezenas se destacam por sua frequência nos sorteios ao longo dos anos.</p>
                  </div>
                </div>
            </div>

          </div> 
            <div className='flex flex-col justify-center items-center gap-5 mt-10 pb-10'>
              <p className='text-2xl text-[#5A5A5A]'>Matemática e sorte podem andar juntas. Você está pronto para jogar com inteligência?</p>
              <button className='flex btn-background-gradient rounded-full items-center justify-center px-5 py-1 w-70 h-15 '>
                <p className='text-white text-2xl '>Quero meu ebook</p>
              </button>
            </div>
      </div>

      <div className=''>
        <div className='bg-[#D5CCFC] w-full lg:px-150 md:px-40 p-10'>
          <div className='flex  justify-between gap-4 w-full mb-10'>
            

            <div className='flex  flex-col w-2/3 pt-10 gap-10'>
                 <h1 className='font-bold text-6xl tracking-tighter '>Como faço o download? </h1>

                <div className='flex gap-5 items-center'>
                  <div className='flex flex-col bg-white min-w-20 h-20 w-20 p-5 rounded-2xl '>
                    <IconList className='icon-loto w-full h-full' />
                  </div>

                  <div className='flex flex-col gap-2'>  
                    <p className='text-[#333333] font-bold text-lg tracking-tighter'>Preencha o formulário com seu nome, e-mail e dados de cadastro.</p>
                  </div>
                </div>

                <div className='flex gap-5 items-center'>
                  <div className='flex flex-col bg-white min-w-20 h-20 w-20 p-5 rounded-2xl '>
                    <IconPage className='icon-loto w-full h-full' />
                  </div>

                  <div className='flex flex-col gap-2'>  
                    <p className='text-[#333333] font-bold text-lg tracking-tighter'>Após o cadastro, o ebook ficará disponível no inbox da sua conta. (Abrirá um popup do lado direito do site)</p>
                  </div>
                </div>

                <div className='flex gap-5 items-center'>
                  <div className='flex flex-col bg-white min-w-20 h-20 w-20 p-5 rounded-2xl '>
                    <IconMail className='icon-loto w-full h-full' />
                  </div>

                  <div className='flex flex-col gap-2'>  
                    <p className='text-[#333333] font-bold text-lg tracking-tighter'>Preencha o formulário com seu nome, e-mail e dados de cadastro.</p>
                  </div>
                </div>
            </div>
            <div className='flex    w-1/2'>
              <img className='object-contain' src={image3} alt="Man with Tablet" />
            </div>
          </div> 

          <div className="flex flex-col justify-center items-center gap-5 ">
               <p className='text-2xl text-center text-[#5A5A5A]'>Matemática e sorte podem andar juntas. Por que aqui no Sorte Sorte, sua sorte pode ser em dobro! Vocês está pronto para jogar com inteligência? </p>
                <button className='flex btn-background-gradient rounded-full items-center justify-center px-5 py-1 w-70 h-15 '>
                  <p className='text-white text-2xl '>Quero meu ebook</p>
                </button>
            </div>

        </div>
        <div className='flex flex-col justify-center items-center gap-3 h-70 w-full p-15'>
            <div className="flex my-5 p-1 w-40 h-17 rounded-sm border-1 border-solid border-black items-center justify-center">
              <a target='_blank'>  
                <span className=''>
                  <p className='text-3xl'>Logotipo</p>
                </span>
              </a>
            </div>
          <p className='text-[#383B41] text-lg'>Registramos o seu pedido em casas Lotéricas Oficiais e te avisamos sempre que você ganhar!</p>
          <p className='text-[#383B41] text-sm '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
          <p className='text-[#383B41] text-sm'>© Todos os direitos reservados</p>
        </div>
      </div>

    </main>
      
     
     
    </>
  )
}

export default App
