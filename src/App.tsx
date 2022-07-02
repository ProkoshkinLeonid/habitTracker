import React, {FC} from 'react'
import {Main} from "./pages/MainPage/Main";
import { Route, Routes } from 'react-router-dom'
import { About } from './pages/AboutPage/About'


export const App: FC = () => {
    return <>
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Main/>}/>
        </Routes>
    </>
}
