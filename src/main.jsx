import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {preload} from 'swr';
import {todosUrlEndpoint as cacheKey, getTodos} from "./api/todosApi.jsx";

preload(cacheKey, getTodos);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);
