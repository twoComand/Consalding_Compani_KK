import React from 'react';
import Salle from './Salle';
import BiznesForm from './BiznesForm';
import Slider from '../../page/Sections/Slider_Feedback/Slider_Feedback';
import ExpertAdvice from '../../page/Sections/ExpertAdvice/ExpertAdvice';
import './newsMain.scss';

function NewsMain({ children }) {
    return (
        <div id='NewsMain'>
            <div className="newsM">
                <div className="container">
                    <h2>Новости</h2>
                </div>
                <Salle />
                <BiznesForm />
                <Slider />
                <ExpertAdvice />
            </div>
            <div >{children}</div>
        </div>
    )
}

export default NewsMain
