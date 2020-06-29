import { injectGlobal } from 'styled-components';

injectGlobal`
  :root {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    box-sizing: border-box;
    overflow: hidden;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }
    
  *:focus { outline: none; }
    
  img { user-select: none; }

  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
