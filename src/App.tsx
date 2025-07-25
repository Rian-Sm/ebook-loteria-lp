import  { ReactComponent as ShootingStar}  from './assets/shooting_star.svg'
import { ReactComponent as IconPage } from './assets/icon-page.svg' 
import { ReactComponent as IconList } from './assets/icon-list.svg'
import { ReactComponent as IconMail } from './assets/icon-mail.svg'

import image1 from './assets/woman_playing.png'
import image2 from './assets/woman-point-up-with-masc.png'
import image3 from './assets/man-with tablet.png'

import './App.css'

import Button from './components/Button'
import Logotipo from './components/Logotipo'
import BlockDescription from './components/BlockDescription'
import Info from './components/Info'
import ComplexCard from './components/ComplexCard'

function App() {
  return (
    <>
    <header className='w-auto px-auto py-5 bg-[#DDD6FB]' >
      <div className='lg:w-300 max-lg:w-full flex max-lg:justify-center mx-auto'>
            <Logotipo></Logotipo>
      </div> 
    </header> 
    <main>
      <div className='banner-background-gradient  w-full'>
        <div className='lg:w-300 max-lg:w-full max-lg:px-10 max-lg:flex-col flex pt-7 mx-auto'>
          <div className='flex w-1/2 max-lg:w-full max-lg:mb-10 max-lg:items-center flex-col align-start justify-center  gap-10 max-lg:gap-5'>
            <h1 className='font-[roca-one] font-bold text-6xl max-lg:text-3xl'>Existe fórmula para ganhar na loteria? </h1>
            <p className='tracking-tighter text-xl max-lg:text-base'>Você ainda aposta no escuro? Descubra como jogar com estratégia! <span className='font-bold'>Cadastre-se</span> e faça o download.</p>
            <Button text='' />
          </div> 
          <div className=' float-left relative w-1/2 max-lg:w-full max-lg:items-center'>
            <div  className='absolute top-5 z-0 svg-star-with-blur w-full'>
              <ShootingStar className='w-full' />
            </div>
            <div className='flex w-full ml-auto mr-auto justify-center'>
              <img className='relative z-0' src={image1} alt="Woman Playing" />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col bg-[#EDEAFE] w-full'>
        <div className='lg:w-300 max-lg:w-full max-lg:px-8 mx-auto flex flex-col '>

          <div className="w-full align-middle justify-center flex pt-10 mb-10">
            <h2 className='font-[roca-one] font-bold text-3xl max-lg:text-2xl'>O que você vai aprender:</h2>
          </div>

          <div className='flex flex-col w-full'>
            <div className="cardList max-lg:w-full  max-lg:flex-col flex justify-between gap-5 max-lg:gap-3">
              <ComplexCard 
                Icon='dice' 
                IconBackground='target'
                color='yellow' 
                text='O que são dedobramentos'
                description='Os desdobramentos são técnicas que aumentam suas chances de premiação, especialmente nas loterias.'
                />
                
                <ComplexCard
                  Icon='window'
                  IconBackground='points'
                  color='green'
                  text='O que são fechamentos'
                  description='Os fechamentos são técnicas que aumentam suas chances de premiação, especialmente nas loterias.'
                />

                <ComplexCard
                  Icon='math'
                  IconBackground='stairs'
                  color='purple'
                  text='Calcular probabilidades'
                  description='Entender as probabilidades de ganhar é essencial para montar estratégias de jogo mais inteligentes aumentando suas chances.'
                />
            </div>
          </div>

          <div className="w-full align-middle justify-center flex pt-10 mb-10">
            <h2 className='font-[roca-one] font-bold text-3xl  max-lg:text-2xl'>E ainda tem mais...</h2>
          </div>

          <div className='flex max-lg:w-full max-lg:flex-col-reverse justify-between gap-4 w-full'>
            <div className='flex w-1/3 max-lg:w-full max-lg:justify-center max-lg:mt-10'>
              <img className='object-contain' src={image2} alt="Woman Pointing Up" />
            </div>

            <div className='flex flex-col w-2/3 gap-4 max-lg:w-full'>
              <BlockDescription 
                text='Análise de combinações' 
                description='A análise de combinações é uma técnica usada para estudar todas as possíveis formações de números em um jogo de loteria.' />

              <BlockDescription 
                text='Apostar em bolões de forma estratégica' 
                description='Apostar em bolões é uma maneira inteligente de aumentar suas chances de ganhar na loteria sem precisar gastar muito dinheiro.' />

              <BlockDescription 
                text='Os números mais sorteados' 
                description='Os números mais sorteados nas loterias brasileiras variam de acordo com o tipo de jogo, mas algumas dezenas se destacam por sua frequência nos sorteios ao longo dos anos.' />
                
            </div>

          </div> 
            <div className='flex flex-col justify-center items-center gap-5 mt-10 pb-10'>
              <p className='font-semibold text-2xl text-[#5A5A5A] max-lg:text-center max-lg:text-lg'>Matemática e sorte podem andar juntas. Você está pronto para jogar com inteligência?</p>
              <Button text='' />

            </div>
        </div>
      </div>

      <div className=''>
        <div className='bg-[#D5CCFC] w-full py-10'>
        <div className='lg:w-300 mx-auto flex flex-col max-lg:w-full'>
          <div className='flex justify-between gap-4 w-full mb-10 max-lg:flex-col '>            
            <div className='flex  flex-col w-2/3 pt-10 gap-10 max-lg:w-full max-lg:pt-0 max-lg:px-5 '>
                 <h1 className='font-[roca-one] font-bold text-6xl tracking-tighter max-lg:text-3xl text-center'>Como faço o download? </h1>

                <Info 
                  text='Preencha o formulário com seu nome, e-mail e dados de cadastro.'
                  icon={<IconList className='icon-loto w-full h-full'/>} />

                <Info 
                  text='Após o cadastro, o ebook ficará disponível no inbox da sua conta. (Abrirá um popup do lado direito do site)'
                  icon={<IconPage className='icon-loto w-full h-full' />} />

                <Info 
                  text='Preencha o formulário com seu nome, e-mail e dados de cadastro.'
                  icon={<IconMail className='icon-loto w-full h-full' />} />

            </div>
            <div className='flex w-1/2 max-lg:w-full max-lg:px-5 max-lg:justify-center'>
              <img className='object-contain' src={image3} alt="Man with Tablet" />
            </div>
          </div> 

          <div className="flex flex-col justify-center items-center gap-5 px-5">
              <p className='text-2xl text-center text-[#5A5A5A] max-lg:text-center max-lg:text-base'>Matemática e sorte podem andar juntas. Por que aqui no Sorte Sorte, sua sorte pode ser em dobro! Vocês está pronto para jogar com inteligência? </p>
              <Button text='' />
            </div>
          </div>
        </div>
        <div className=' lg:w-300 mx-auto flex flex-col justify-center items-center gap-3 w-full py-10 max-lg:px-5 max-lg:gap-5'>
          <div className=' mb-5'>
            <Logotipo></Logotipo>
          </div>

          <p className='text-[#383B41] text-lg max-lg:text-center max-lg:text-base'>Registramos o seu pedido em casas Lotéricas Oficiais e te avisamos sempre que você ganhar!</p>
          <p className='text-[#383B41] text-sm max-lg:text-center max-lg:text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
          <p className='text-[#383B41] text-sm max-lg:text-center max-lg:text-xs'>© Todos os direitos reservados</p>
        </div>
      </div>

    </main>
      
     
     
    </>
  )
}

export default App
