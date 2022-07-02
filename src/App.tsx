import React, {FC} from 'react'
import {Main} from "./pages/MainPage/Main";
import { Route, Routes } from 'react-router-dom'
import { About } from './pages/AboutPage/About'
import {LayOut} from "@components/LayOut/LayOut";


export const App: FC = () => {
    return <>
        <Routes>
            <Route path="/" element={<LayOut/>}>
                <Route index element={<Main/>}/>
                <Route path="/about" element={<About/>}/>
            </Route>
        </Routes>
    </>
}
