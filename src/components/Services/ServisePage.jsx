
import { Link } from 'react-router-dom';
import './serviseMain.scss';

function ServisePage(props) {
    return (
        <div className="servise__block">
            <h3>{props.Stitle}</h3>
            <div className="servise__info">
                <div className="servise__img">
                    <img src={props.Simg} alt='foto' />
                </div>
                <div className="servise__item">
                    <p>{props.Stext}

                    </p>
                    <div className="servise__buttonBlock">
                        <button className='servise__button'><Link to={props.Slink}>Узнать больше</Link></button>
                        <button className='servise__button'><Link to={props.Slink}>Заказать</Link></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServisePage;
