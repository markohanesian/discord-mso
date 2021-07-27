import React from 'react'
import { House } from 'react-bootstrap-icons';

const iconStyle = {
    fontSize: '3rem',
    borderRadius: '50px',
    backgroundColor: 'white',
    padding: '15px',
    margin: '5px'
}

export default function HomeButton() {
    return (
        <div>
            <House style={iconStyle}/>
        </div>
    )
}
