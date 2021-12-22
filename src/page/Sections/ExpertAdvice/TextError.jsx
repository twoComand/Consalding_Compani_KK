import React from 'react';
import './expertAdvice.scss';

function TextError(props) {
    return (
        <div className='error'>
            {props.children}
        </div>
    )
}

export default TextError;
