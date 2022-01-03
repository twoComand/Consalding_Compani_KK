import React from 'react';
import Acardion from '../../page/Sections/Acardion/Acardion';
import ExpertAdvice from '../../page/Sections/ExpertAdvice/ExpertAdvice';
import Slider from '../../page/Sections/Slider_Feedback/Slider_Feedback';
import './priceListMain.scss';

function PriceListMain({ children }) {
    return (
        <section id='PriceListMain' className='priceListMain'>
            <h2 className='priceListMain__title'>Стоимость услуг</h2>
            <Acardion />
            <div className="priceListMain__blockLine"></div>
            <div className="container">
                <p className='priceListMain__text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat necessitatibus labore earum quae eius perferendis ipsum,
                    a nesciunt ab facere debitis corporis porro consequuntur delectus consectetur
                    laborum commodi id mollitia amet ratione suscipit adipisci est tempora! Accusamus
                    Sapiente inventore odit voluptates, unde impedit soluta.
                </p>
            </div>
            <Slider />
            <ExpertAdvice />
            <div >{children}</div>
        </section>
    )
}

export default PriceListMain
