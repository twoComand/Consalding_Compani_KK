import React from 'react';
import InputAskUs from './InputAskUs';

function AscSchema(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input': return <InputAskUs {...rest} />
        default: return null;
    }
}

export default AscSchema;
