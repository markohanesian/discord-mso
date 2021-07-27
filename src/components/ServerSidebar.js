import React from 'react'
import HomeButton from '../components/HomeButton'
import ServerButton from '../components/ServerButton'

const SideBarStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'lightgrey',
    padding: '10px'
}

const DividerStyle = {
    display: 'block',
    borderRadius: '15px',
    height: '3px',
    width: '60px',
    backgroundColor: 'darkgrey',
    margin: '5px'
}

export default function ServerSidebar() {
    return (
        <div style={SideBarStyle}>
            <HomeButton />
            <div style={DividerStyle}> </div>
            <ServerButton />
        </div>
    )
}
