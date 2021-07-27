import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons';

const iconStyle = {
    fontSize: '3rem',
    borderRadius: '50px',
    backgroundColor: 'white',
    padding: '15px',
    margin: '5px'
}

export default function ServerButton() {
    return (
        <div>
            <ArrowRight style={iconStyle}/>
        </div>
    )
}
