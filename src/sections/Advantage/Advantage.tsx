import React, {FC} from 'react';
import './Advantage.css'
import world from '../../img/advantage/world.svg'
import note from "../../img/advantage/note.svg"
import cards from "../../img/advantage/cards.svg"

interface AdvanatgeItemProps {
    title : string
    subTitle : string
    src : string
}

const AdvantageItem: FC<AdvanatgeItemProps> = ({title , subTitle , src}) => {

    return (
       <div className="advantage__item">
           <img className="advantage__item__img" src={src}
                alt="The whole world!"/>
           <div className="advantage__item__title">{title}</div>
           <div className="advantage__item__subtitle">
               {subTitle}
           </div>
       </div>
   )
}

const Advantage = () => {
    return (

            <section id={'advantage'} className="advantage">
                <div className="advantage-container">

                    <AdvantageItem
                    title={'The whole world!'}
                    subTitle={'We work all over the world, so it doesnt matter where you are.'}
                    src={world}
                    />
                    <AdvantageItem
                        title={'Privacy and data security!'}
                        subTitle={'Your data is encrypted and stored on a secure portal which only you can access.'}
                        src={note}
                    />
                    <AdvantageItem
                        title={'Fast and cheap!'}
                        subTitle={'Name change journey with us for as little as £45.95'}
                        src={cards}
                    />

                </div>
            </section>
    );
};

export default Advantage;
