import React from 'react';
import Acardion from '../../page/Sections/Acardion/Acardion'

function PriceListMain({ children }) {
    return (
        <div id='PriceListMain'>
            <h1>PriceListMain</h1>
            <Acardion />
            <div >{children}</div>
        </div>
    )
}

export default PriceListMain
