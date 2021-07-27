import React from 'react';
import ServerSidebar from './components/ServerSidebar'

const ViewPortSyle = {
  display: 'flex',
  height: '100vh',
  width: 'auto',
  backgroundColor: 'whitesmoke'
}


function App() {
  return (
    <div style={ViewPortSyle}>
      <ServerSidebar />
    </div>
  );
}

export default App;
