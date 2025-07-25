import {ReactComponent as IconA} from '../assets/card-icon-a.svg'
import {ReactComponent as IconB} from '../assets/card-icon-b.svg'
import {ReactComponent as IconC} from '../assets/card-icon-c.svg'
import {ReactComponent as Star} from '../assets/star.svg'
import {ReactComponent as BackA} from '../assets/card-back-a.svg'
import {ReactComponent as BackB} from '../assets/card-back-b.svg'
import {ReactComponent as BackC} from '../assets/card-back-c.svg'
import {ReactComponent as BackIconCard} from '../assets/background-icon-card.svg'


type CardColor = 'yellow' | 'green' | 'purple';
type CardIcon = 'dice' | 'window' | 'math';
type CardIconBack = 'target' | 'points' | 'stairs';

function ComplexCard (
    {
        text,
        description,
        Icon,
        IconBackground,
        color,
        classNameIcon,
        classNameIconBack
    }:{
        text:string,
        description:string,
        Icon:CardIcon,
        IconBackground:CardIconBack,
        color:CardColor,
        classNameIcon?: string,
        classNameIconBack?: string
    }){
    
        const Icons: Record<CardIcon, {
            get: any;
        }> = {
            'dice': {
                get: (className: string) => <IconA className={`${className} mx-auto h-10 w-10 -my-1`} />
            },
            'window': {
                get: (className: string) => <IconB className={`${className} mx-auto h-8 w-8`} />
            },
            'math': {
                get: (className: string) => <IconC className={`${className} mx-auto h-8 w-8`} />
            }
        }

        const IconsBack: Record<CardIconBack, {
            get: any;
            align: string;

        }> = {
            'target': {
                get: (className: string) => <BackA className={`${className} w-40`} />,
                align: `-mt-20 -mr-12`
            },
            'points': {
                get: (className: string) => <BackB className={`${className} w-30`} />,
                align: `-mt-10.5 -mr-9`
            },
            'stairs': {
                get: (className: string) => <BackC className={`${className} w-30`} />,
                align: `-mt-15 -mr-7.5`
            }
        }

        
        const styleCard: Record<CardColor, {
            icon: string;
            iconBackground: string;
            iconOversize: string;
            background: string;
        }> = {
            'yellow': {
                icon: 'icon-a',
                iconBackground: 'background-icon-card-1',
                iconOversize: 'card-back-a',
                background: 'bg-[#E0B00B]',
            },
            'green': {
                icon: 'icon-b',
                iconBackground: 'background-icon-card-2',
                iconOversize: 'card-back-b',
                background: 'bg-[#10BD57]',
            },
            'purple': {
                icon: 'icon-c',
                iconBackground: 'background-icon-card-3',
                iconOversize: 'card-back-c',
                background: 'bg-[#BB60E9]',
            }
        }
    
    return (
     <div className={`card overflow-hidden rounded-3xl ${styleCard[color].background} min-w-70 w-auto h-70 gap-4 flex flex-col p-4 max-lg:h-full max-lg:pb-12 basis-full`}>
                <div className="card-top flex h-30">
                  <div className="card-icon relative  w-23 h-23 mt-auto ">
                    <div className="background-icon-card absolute -mt-5 ">
                      <BackIconCard className={`${styleCard[color].iconBackground} z-0 w-26`}></BackIconCard>
                    </div>
                    <div className='relative background-icon-card z-1 p-3 px-3 ml-1.5 card-a'>
                      <Star className={`rotate-22 star ${styleCard[color].icon} mr-auto h-4 w-4`}></Star>
                        {Icons[Icon].get(`${styleCard[color].icon} ${classNameIcon}`)}
                      <Star className={`rotate-22 star ${styleCard[color].icon} ml-auto h-4 w-4`}></Star>
                    </div>
                  </div>  
                  <div className={`card-background ml-auto ${IconsBack[IconBackground].align}`}>
                    {IconsBack[IconBackground].get(`${styleCard[color].iconBackground} ${classNameIconBack}`)}
                  </div>
                </div>
                <div className="card-bottom flex flex-col gap-1 max-lg:h-35">
                  <h3 className="font-bold text-lg text-white">{text}</h3>
                  <p className='text-white text-md tracking-tighter'>{description}</p>
                </div>
              </div>
    )
}

export default ComplexCard