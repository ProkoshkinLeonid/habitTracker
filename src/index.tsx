import React from 'react'
import {createRoot} from "react-dom/client"
import {App} from "./App"
import { BrowserRouter} from 'react-router-dom'

const container: HTMLElement | null  = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);
root.render(
    <BrowserRouter>
            <App />
    </BrowserRouter>
)