import React from 'react';
import handImg from '../../img/promo/promo.svg'
import './PromoSecond.css'

const PromoSecond = () => {
    return (
        <section className="promo-second">
            <div className="promo-second__title">Name <span> change</span></div>
            <div className="promo-second__subtitle">
                made <span className="span-yellow">easy</span>
            </div>
            <div className="promo-second__img">
                <img alt={'hand'} src={handImg}/>
            </div>
        </section>
    );
};

export default PromoSecond;
