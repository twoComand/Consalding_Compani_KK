import React from 'react';
import { Link } from 'react-router-dom';
import '../Services/Finans/finans.scss';
// import './finans.scss';

function HomePage(props) {
    return (
        <div className="finansrder__block">
            <h3>{props.Stitle}</h3>
            <div className="finansrder__info">
                <div className="finansrder__img">
                    <img src={props.Simg} alt='foto' />
                </div>
                <div className="finansrder__item">
                    <p>{props.Stext}</p>
                    <button className='finansrder__button'><Link to={props.Slink}>{props.Sbtn}</Link></button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
