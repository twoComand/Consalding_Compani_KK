import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';
import './acardion.scss';

function PageAcardion(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="accardion">
                <div onClick={() => setIsOpen(!isOpen)} className="accardion__header">
                    <h2>{props.title}</h2>
                    <div>
                        {isOpen ? <IoMdArrowDropup className='accardion__arrow' /> : <IoMdArrowDropdown className='accardion__arrow' />}
                    </div>
                </div>
                {isOpen &&
                    <div className="accardion__body">
                        <h4>{props.service}</h4>
                        <p>
                            {props.serviceItem}
                        </p>
                        <h4>{props.term}</h4>
                        <p>{props.termDate}</p>
                        <h4>{props.price}</h4>
                        <p>{props.priceNum}</p>
                        <button>Заказать</button>
                    </div>}
            </div>

        </div>
    )
}

export default PageAcardion;
