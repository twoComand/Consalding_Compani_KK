import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
// import './expertAdvice.scss';

function Schemas(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input': return <Input {...rest} />
        case 'textarea': return <Textarea {...rest} />
        default: return null;
    }
}

export default Schemas
