import React from 'react';
import './finans.scss';

function FinansPage(props) {
    return (
        <div className="finans__block">
            <h3>{props.Stitle}</h3>
            <div className="finans__info">
                <div className="finans__img">
                    <img src={props.Simg} alt='foto' />
                </div>
                <div className="finans__item">
                    <p>{props.Stext}</p>
                </div>
            </div>
        </div>
    )
}



export default FinansPage;
