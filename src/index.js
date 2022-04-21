import {StrictMode} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {createRoot} from 'react-dom/client';
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);