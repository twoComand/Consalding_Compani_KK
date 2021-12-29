import React from 'react';
import './finans.scss';

function FinansPageOrder(props) {
    return (
        <div className="finansrder__block">
            <h3>{props.Stitle}</h3>
            <div className="finansrder__info">
                <div className="finansrder__img">
                    <img src={props.Simg} alt='foto' />
                </div>
                <div className="finansrder__item">
                    <p>{props.Stext}</p>
                    <button className='finansrder__button'><a href="/">{props.Sbtn}</a></button>
                </div>
            </div>
        </div>
    )
}

export default FinansPageOrder;
