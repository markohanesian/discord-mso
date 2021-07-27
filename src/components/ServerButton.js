import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons';

const iconStyle = {
    fontSize: '4rem',
    borderRadius: '50px',
    backgroundColor: 'white'
}

export default function ServerButton() {
    return (
        <div>
            <ArrowRight style={iconStyle}/>
        </div>
    )
}
