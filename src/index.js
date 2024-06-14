import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './utils/context';
import './utils/i18n';
import { ModalCtxProvider } from './context/modalCtx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <ModalCtxProvider>
                <App />
            </ModalCtxProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
