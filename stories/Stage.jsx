import React from "react";
import theme from '../src/theme';

function Stage({ component, backgroundColor }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      height: '100vh',
      width: '100%',
      backgroundColor: backgroundColor ? backgroundColor : '#000'
    }}>
    {component}
    </div>
  );
}

export default Stage;
