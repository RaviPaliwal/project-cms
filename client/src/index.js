import ReactDOM from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/Context';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render ( 
    
        <BrowserRouter>
        <ContextProvider>
            <App/>
        </ContextProvider>
        </BrowserRouter>   
    
);